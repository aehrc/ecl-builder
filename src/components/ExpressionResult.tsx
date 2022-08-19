/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Alert, Stack } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SCT_URI } from "../constants";
import useValueSetExpansion from "../hooks/useValueSetExpansion";
import { formatNumber } from "../number";
import { queryClient } from "../queryClient";
import ExpressionResultTable from "./ExpressionResultTable";

export interface ResultProps {
  // The expression to display results for.
  expression: string;
  // A set of options that control the behaviour of the component.
  options?: Partial<ExpressionResultOptions>;
}

export interface ExpressionResultOptions {
  // The URL of the FHIR terminology server to use for concept search.
  terminologyServerUrl: string;
  // The maximum number of results to return within concept search.
  maxSearchResults: number;
}

export default function ExpressionResult({
  expression,
  options = {},
}: ResultProps) {
  function ExpressionResultContent() {
    const { terminologyServerUrl, maxSearchResults } =
        applyDefaultOptions(options),
      { data, isLoading, error } = useValueSetExpansion(
        terminologyServerUrl,
        buildExpandParams(expression, maxSearchResults)
      );
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <Alert severity="error">{error.message}</Alert>;
    }
    if (!data) {
      console.warn("No error, but also no data");
      return null;
    }
    if (data.concepts.length < 1) {
      return <Alert severity="info">No results returned.</Alert>;
    }
    return (
      <Stack className="expression-result">
        {data.total && data.total > maxSearchResults ? (
          <Alert severity="info">
            Showing {formatNumber(maxSearchResults)} of{" "}
            {formatNumber(data.total)} results total.
          </Alert>
        ) : null}
        <ExpressionResultTable results={data} />
      </Stack>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ExpressionResultContent />
    </QueryClientProvider>
  );
}

/**
 * Default configuration options.
 */
function applyDefaultOptions(
  options: Partial<ExpressionResultOptions>
): ExpressionResultOptions {
  return {
    terminologyServerUrl: "https://tx.ontoserver.csiro.au/fhir",
    maxSearchResults: 10,
    ...options,
  };
}

function buildExpandParams(expression: string, limit: number): URLSearchParams {
  const searchParams = new URLSearchParams();
  searchParams.set(
    "url",
    `${SCT_URI}?fhir_vs=ecl/${encodeURIComponent(expression)}`
  );
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
  searchParams.set("count", limit.toString(10));
  return searchParams;
}

function Loading() {
  // TODO: Turn this into something a bit nicer.
  return null;
}
