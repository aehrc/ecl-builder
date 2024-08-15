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
  systemVersion: string,
  query: string,
  limit: number,
  minQueryLength: number,
  options: QueryObserverOptions<ConceptSearchResult, Error> = {}
): UseQueryResult<ConceptSearchResult, Error> {
  // The query is debounced to avoid too many requests to the server.
  const debouncedQuery = useDebounce(query);
  return useValueSetExpansion(endpoint, buildExpandParams(valueSet, systemVersion, debouncedQuery, limit), {
    ...options,
    enabled: debouncedQuery.length >= minQueryLength,
  });
}

function buildExpandParams(
  valueSet: string,
  systemVersion: string,
  query: string,
  limit: number
): URLSearchParams {
  const searchParams = new URLSearchParams();
  searchParams.set("url", valueSet);
  if (systemVersion) searchParams.set("system-version", systemVersion);
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
  // Only active concepts are included in the results.
  searchParams.set("activeOnly", "true");
  // Limit the number of results.
  searchParams.set("count", limit.toString(10));
  return searchParams;
}
