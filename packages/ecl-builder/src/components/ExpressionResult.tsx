/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Alert, Box, FormControlLabel, Stack, Switch } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { SCT_URI } from "../constants";
import useValueSetExpansion from "../hooks/useValueSetExpansion";
import { formatNumber } from "../number";
import { queryClient } from "../queryClient";
import ErrorBoundary from "./ErrorBoundary";
import ExpressionResultTable from "./ExpressionResultTable";
import Loading from "./Loading";

export interface ResultProps {
  // The expression to display results for.
  expression: string;
  // A set of options that control the behaviour of the component.
  options?: Partial<ExpressionResultOptions>;
}

interface ResultContentProps extends ResultProps {
  options: ExpressionResultOptions;
}

export interface ExpressionResultOptions {
  // The URL of the FHIR terminology server to use for concept search.
  terminologyServerUrl: string;
  // The maximum number of results to return within concept search.
  maxSearchResults: number;
  // The delay (in milliseconds) before the loading indicator is displayed.
  loadingDelay: number;
}

export default function ExpressionResult({
  expression,
  options = {},
}: ResultProps) {
  const resolvedOptions = applyDefaultOptions(options);
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Loading delay={resolvedOptions.loadingDelay}>
          <ExpressionResultContent
            expression={expression}
            options={resolvedOptions}
          />
        </Loading>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

function ExpressionResultContent({
  expression,
  options: { terminologyServerUrl, maxSearchResults },
}: ResultContentProps) {
  const [includeInactives, setIncludeInactives] = useState(false),
    { data } = useValueSetExpansion(
      terminologyServerUrl,
      buildExpandParams(expression, maxSearchResults, includeInactives),
      { suspense: true, keepPreviousData: false }
    );
  if (!data) {
    console.warn("No error, but also no data");
    return null;
  }
  if (data.concepts.length < 1) {
    return <Alert severity="info">No results returned.</Alert>;
  }
  return (
    <Stack className="expression-result" spacing={2}>
      {data.total && data.total > maxSearchResults ? (
        <Alert severity="info">
          Showing {formatNumber(maxSearchResults)} of {formatNumber(data.total)}{" "}
          results total.
        </Alert>
      ) : null}
      <Box sx={{ px: 2 }}>
        <FormControlLabel
          control={
            <Switch
              size="small"
              onChange={(e) => setIncludeInactives(e.target.checked)}
            />
          }
          label="Include inactive concepts"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.9em",
              ml: 1,
              userSelect: "none",
            },
          }}
        />
      </Box>
      <ExpressionResultTable results={data} />
    </Stack>
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
    loadingDelay: 500,
    ...options,
  };
}

function buildExpandParams(
  expression: string,
  limit: number,
  includeInactives: boolean
): URLSearchParams {
  const searchParams = new URLSearchParams(),
    activeOnly = !includeInactives;
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
  // Only active concepts are included in the results.
  searchParams.set("activeOnly", activeOnly.toString());
  // Limit the number of results.
  searchParams.set("count", limit.toString(10));
  return searchParams;
}
