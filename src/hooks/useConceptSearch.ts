/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { QueryObserverOptions, UseQueryResult } from "@tanstack/react-query";
import useDebounce from "./useDebounce";
import useValueSetExpansion, {
  ConceptSearchResult,
} from "./useValueSetExpansion";

/**
 * A hook for incorporating concept search into components.
 *
 * @author John Grimes
 */
export default function useConceptSearch(
  endpoint: string,
  valueSet: string,
  query: string,
  options: QueryObserverOptions<ConceptSearchResult, Error> = {}
): UseQueryResult<ConceptSearchResult, Error> {
  // The query is debounced to avoid too many requests to the server.
  const searchParams = buildExpandParams(valueSet, query),
    debouncedSearchParams = useDebounce(searchParams);
  return useValueSetExpansion(endpoint, debouncedSearchParams, {
    ...options,
    // TODO: Make this configurable.
    enabled: query.length >= 3,
  });
}

function buildExpandParams(valueSet: string, query: string): URLSearchParams {
  const searchParams = new URLSearchParams();
  searchParams.set("url", valueSet);
  searchParams.set("filter", query);
  // Designations are included, so that we can get the semantic tag from the FSN.
  searchParams.set("includeDesignations", "true");
  // This is used to trim down the response to just what we need.
  // See: https://www.hl7.org/fhir/search.html#elements
  searchParams.set(
    "elements",
    "expansion.contains.code,expansion.contains.display," +
      "expansion.contains.fullySpecifiedName," +
      "expansion.contains.active"
  );
  // TODO: Make this configurable.
  searchParams.set("count", "10");
  return searchParams;
}
