/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Alert } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { SCT_URI } from "../constants";
import useValueSetExpansion from "../hooks/useValueSetExpansion";
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
  searchMaxResults: number;
}

export default function ExpressionResult({
  expression,
  options = {},
}: ResultProps) {
  function ExpressionResultContent() {
    const { terminologyServerUrl } = applyDefaultOptions(options),
      { data, isLoading, error } = useValueSetExpansion(
        terminologyServerUrl,
        buildExpandParams(expression)
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
    if (data.length < 1) {
      return <Alert severity="info">No results returned.</Alert>;
    }
    return <ExpressionResultTable results={data} />;
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
    searchMaxResults: 10,
    ...options,
  };
}

function buildExpandParams(expression: string): URLSearchParams {
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
  // TODO: Make this configurable.
  searchParams.set("count", "10");
  return searchParams;
}

function Loading() {
  // TODO: Turn this into something a bit nicer.
  return null;
}
