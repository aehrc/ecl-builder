/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ValueSet, ValueSetComposeIncludeConceptDesignation } from "fhir/r4";
import { QueryObserverOptions, useQuery } from "react-query";
import { FULLY_SPECIFIED_NAME_ID, SCT_URI } from "../constants";
import useDebounce from "./useDebounce";

export interface Concept {
  id: string;
  display?: string;
  fullySpecifiedName?: string;
}

export type ConceptSearchResult = Concept[];

interface ConceptSearchArguments {
  endpoint: string;
  query: string;
}

/**
 * A hook for incorporating concept search into components.
 *
 * @author John Grimes
 */
export default function useConceptSearch(
  endpoint: string,
  query: string,
  options: QueryObserverOptions<ConceptSearchResult, Error> = {}
) {
  // The query is debounced to avoid too many requests to the server.
  const debouncedQuery = useDebounce(query);
  return useQuery<ConceptSearchResult, Error>(
    ["conceptSearch", endpoint, debouncedQuery],
    () => executeConceptSearch(endpoint, debouncedQuery),
    options
  );
}

async function executeConceptSearch(
  endpoint: string,
  query: string
): Promise<ConceptSearchResult> {
  // Queries less than 3 characters are not sent to the server.
  if (query.length < 3) {
    return [];
  }
  const editionUri = SCT_URI;
  const searchParams = buildExpandParams(editionUri, query);
  const response = await fetch(
    `${endpoint}/ValueSet/$expand?${searchParams.toString()}`
  );
  const valueSet: ValueSet = await response.json();
  return extractConceptsFromValueSet(valueSet);
}

function buildExpandParams(editionUri: string, query: string): URLSearchParams {
  const searchParams = new URLSearchParams();
  searchParams.set("url", `${editionUri}?fhir_vs`);
  searchParams.set("filter", query);
  // Designations are included, so that we can get the semantic tag from the
  // FSN.
  searchParams.set("includeDesignations", "true");
  // This is used to trim down the response to just what we need.
  // See: https://www.hl7.org/fhir/search.html#elements
  searchParams.set(
    "elements",
    "expansion.contains.code,expansion.contains.display," +
      "expansion.contains.fullySpecifiedName," +
      "expansion.contains.active"
  );
  searchParams.set("count", "10");
  return searchParams;
}

function extractConceptsFromValueSet(valueSet: ValueSet) {
  if (!valueSet.expansion) {
    throw new Error("No expansion found in response");
  }
  if (valueSet.expansion.total === 0) {
    return [];
  }
  if (!valueSet.expansion.contains) {
    throw new Error("No expansion.contains found in response");
  }
  return valueSet.expansion.contains.map((concept) => ({
    id: concept.code as string,
    display: concept.display,
    fullySpecifiedName:
      concept.designation
        ?.filter(matchFullySpecifiedNameDesignation)
        ?.map((d) => d.value)
        .reduce<string | null>(
          (prev, curr, currentIndex, array) =>
            currentIndex === 0 ? curr : prev,
          null
        ) || undefined,
  }));
}

function matchFullySpecifiedNameDesignation(
  designation: ValueSetComposeIncludeConceptDesignation
): boolean {
  return (
    designation.use?.system === SCT_URI &&
    designation.use?.code === FULLY_SPECIFIED_NAME_ID
  );
}