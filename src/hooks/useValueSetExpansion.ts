/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { QueryObserverOptions, useQuery } from "@tanstack/react-query";
import {
  OperationOutcome,
  ValueSet,
  ValueSetComposeIncludeConceptDesignation,
} from "fhir/r4";
import { FULLY_SPECIFIED_NAME_ID, SCT_URI } from "../constants";

export interface Concept {
  id: string;
  display?: string;
  semanticTag?: string;
}

export type ConceptSearchResult = Concept[];

export const SEMANTIC_TAG_PATTERN = /\(([^)]+)\)$/;

export default function useValueSetExpansion(
  endpoint: string,
  query: URLSearchParams,
  options: QueryObserverOptions<ConceptSearchResult, Error> = {}
) {
  return useQuery<ConceptSearchResult, Error>(
    ["valueSetExpansion", endpoint, query.toString()],
    () => executeValueSetExpansion(endpoint, query),
    options
  );
}

async function executeValueSetExpansion(
  endpoint: string,
  query: URLSearchParams
): Promise<ConceptSearchResult> {
  const response = await fetch(
    `${endpoint}/ValueSet/$expand?${query.toString()}`
  );
  if (!response.ok) {
    throw await extractError(response);
  }
  const valueSet = await parseJsonValueSet(response);
  return extractConceptsFromValueSet(valueSet);
}

async function parseJsonValueSet(response: Response): Promise<ValueSet> {
  if (checkFhirJson(response)) {
    return response.json();
  } else {
    throw new Error("Successful response was not FHIR JSON");
  }
}

async function extractError(response: Response): Promise<Error> {
  if (checkFhirJson(response)) {
    const parsedResponse = await response.json();
    if (
      parsedResponse.resourceType === "OperationOutcome" &&
      parsedResponse.issue
    ) {
      const operationOutcome = parsedResponse as OperationOutcome;
      return new Error(operationOutcome.issue[0].diagnostics);
    } else {
      console.warn(
        "Received FHIR JSON error response that was not an OperationOutcome"
      );
    }
  }
  return new Error(`${response.status} ${response.statusText}`);
}

export function extractConceptsFromValueSet(
  valueSet: ValueSet
): ConceptSearchResult {
  if (!valueSet.expansion) {
    throw new Error("No expansion found in response");
  }
  if (valueSet.expansion.total === 0) {
    return [];
  }
  if (!valueSet.expansion.contains) {
    throw new Error("No expansion.contains found in response");
  }
  return valueSet.expansion.contains.map((concept) => {
    const fullySpecifiedName =
        concept.designation
          ?.filter(matchFullySpecifiedNameDesignation)
          ?.map((d) => d.value)
          .reduce<string | null>(
            (prev, curr, currentIndex) => (currentIndex === 0 ? curr : prev),
            null
          ) || undefined,
      semanticTagMatch = fullySpecifiedName?.match(SEMANTIC_TAG_PATTERN),
      semanticTag =
        semanticTagMatch && semanticTagMatch.length > 1
          ? semanticTagMatch[1]
          : undefined;
    return {
      id: concept.code as string,
      display: concept.display,
      semanticTag,
    };
  });
}

function checkFhirJson(response: Response): boolean {
  const contentType = response.headers.get("content-type");
  return !!contentType && contentType.includes("application/fhir+json");
}

function matchFullySpecifiedNameDesignation(
  designation: ValueSetComposeIncludeConceptDesignation
): boolean {
  return (
    designation.use?.system === SCT_URI &&
    designation.use?.code === FULLY_SPECIFIED_NAME_ID
  );
}
