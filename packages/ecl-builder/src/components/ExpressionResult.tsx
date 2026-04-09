/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import {
  Alert,
  Box,
  CircularProgress,
  FormControlLabel,
  Stack,
} from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import { SCT_URI } from "../constants";
import type { ExpressionDiagnostic } from "../types";
import useValueSetExpansion from "../hooks/useValueSetExpansion";
import { formatNumber } from "../number";
import { queryClient } from "../queryClient";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";
import ExpressionResultTable from "./ExpressionResultTable";
import IncludeInactives from "./IncludeInactives";

export type { ExpressionDiagnostic } from "../types";

export interface ResultProps {
  // The expression to display results for.
  expression: string;
  // A set of options that control the behaviour of the component.
  options?: Partial<ExpressionResultOptions>;
  // Diagnostics from the ECL editor. When errors are present, the result
  // panel shows them instead of sending the expression to the server.
  diagnostics?: ExpressionDiagnostic[];
}

interface ResultContentProps extends ResultProps {
  options: ExpressionResultOptions;
}

export interface ExpressionResultOptions {
  // The URL of the FHIR terminology server to use for concept search.
  terminologyServerUrl: string;
  // The maximum number of results to return within concept search.
  maxSearchResults: number;
}

/**
 *
 * @param root0
 * @param root0.expression
 * @param root0.options
 * @param root0.diagnostics
 */
export default function ExpressionResult({
  expression,
  options = {},
  diagnostics,
}: ResultProps) {
  const resolvedOptions = applyDefaultOptions(options);
  const errors = diagnostics?.filter((d) => d.severity === "error");
  if (errors && errors.length > 0) {
    return (
      <Stack spacing={1}>
        {errors.map((d, i) => (
          <Alert key={i} severity="error">
            {d.message}
          </Alert>
        ))}
      </Stack>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      {/* ErrorBoundary catches render-time errors from child components.
          Query errors are handled inline by ExpressionResultContent. */}
      <ErrorBoundary resetKey={expression}>
        <ExpressionResultContent
          expression={expression}
          options={resolvedOptions}
        />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

function ExpressionResultContent({
  expression,
  options: { terminologyServerUrl, maxSearchResults },
}: ResultContentProps) {
  const [includeInactives, setIncludeInactives] = useState(false),
    { data, error, isFetching } = useValueSetExpansion(
      terminologyServerUrl,
      buildExpandParams(expression, maxSearchResults, includeInactives),
    );
  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }
  if (isFetching && !data) {
    return <Loading />;
  }
  if (!data) {
    return null;
  }
  if (data.concepts.length < 1) {
    return <Alert severity="info">No results returned.</Alert>;
  }
  return (
    <Stack className="expression-result" spacing={2}>
      {data.total && data.total > maxSearchResults ? (
        <Alert severity="info" sx={isFetching ? { opacity: 0.5 } : {}}>
          Showing {formatNumber(maxSearchResults)} of {formatNumber(data.total)}{" "}
          results total.
        </Alert>
      ) : null}
      <Box sx={{ px: 2 }}>
        <FormControlLabel
          control={
            <IncludeInactives
              checked={includeInactives}
              onChange={(checked) => {
                if (!isFetching) {
                  setIncludeInactives(checked);
                }
              }}
            />
          }
          label={
            <>
              <span>Include inactive concepts</span>
              {isFetching ? (
                <CircularProgress size={14} sx={{ ml: 1 }} />
              ) : null}
            </>
          }
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "0.9em",
              ml: 1,
              userSelect: "none",
            },
          }}
        />
      </Box>
      <ExpressionResultTable
        results={data}
        sx={isFetching ? { opacity: 0.5 } : {}}
      />
    </Stack>
  );
}

/**
 * Default configuration options.
 * @param options
 */
function applyDefaultOptions(
  options: Partial<ExpressionResultOptions>,
): ExpressionResultOptions {
  return {
    terminologyServerUrl: "https://tx.ontoserver.csiro.au/fhir",
    maxSearchResults: 10,
    ...options,
  };
}

function buildExpandParams(
  expression: string,
  limit: number,
  includeInactives: boolean,
): URLSearchParams {
  const searchParams = new URLSearchParams(),
    activeOnly = !includeInactives;
  searchParams.set(
    "url",
    `${SCT_URI}?fhir_vs=ecl/${encodeURIComponent(expression)}`,
  );
  // Designations are included, so that we can get the semantic tag from the FSN.
  searchParams.set("includeDesignations", "true");
  // This is used to trim down the response to just what we need.
  // See: https://www.hl7.org/fhir/search.html#elements
  searchParams.set(
    "elements",
    "expansion.contains.code,expansion.contains.display," +
      "expansion.contains.fullySpecifiedName," +
      "expansion.contains.active",
  );
  // Only active concepts are included in the results.
  searchParams.set("activeOnly", activeOnly.toString());
  // Limit the number of results.
  searchParams.set("count", limit.toString(10));
  return searchParams;
}
