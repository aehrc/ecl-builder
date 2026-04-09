/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Code, Visibility } from "@mui/icons-material";
import {
  CssBaseline,
  Stack,
  Tab,
  Tabs,
  Theme,
  ThemeProvider,
} from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { createContext, Suspense, useEffect, useState } from "react";
import type { ExpressionDiagnostic } from "../types";
import { queryClient } from "../queryClient";
import { extendTheme } from "../themes/extendTheme";
import CodeEditor from "./CodeEditor";
import CopyExpression from "./CopyExpression";
import CopyValueSet from "./CopyValueSet";
import ErrorBoundary from "./ErrorBoundary";
import FocusProvider from "./ecl/FocusProvider";
import Loading from "./Loading";
import TabPanel from "./TabPanel";
import VisualBuilder from "./VisualBuilder";

// .js extension required: fix-tsc-es-imports does not rewrite dynamic imports.
const LazyEclCodeEditor = React.lazy(() =>
  import("./EclCodeEditor.js").catch((err) => {
    throw new Error(
      `Failed to load the ECL code editor. Ensure that @aehrc/ecl-editor-react, ` +
        `@monaco-editor/react, and monaco-editor are installed. ` +
        `Original error: ${err instanceof Error ? err.message : String(err)}`,
    );
  }),
);

export interface ExpressionBuilderProps {
  // The current expression being built.
  expression?: string;
  // Invoked when the expression is updated.
  onChange?: (expression: string) => unknown;
  // Invoked when the ECL editor's diagnostics change. Only fires when
  // the Monaco-based ECL editor is active.
  onDiagnosticsChange?: (diagnostics: ExpressionDiagnostic[]) => void;
  // A set of options that control the behaviour of the component.
  options?: Partial<ExpressionBuilderOptions>;
}

export interface ExpressionBuilderOptions {
  // The URL of the FHIR terminology server to use for concept search.
  terminologyServerUrl: string;
  // The system version to use for concept search.
  systemVersion?: string;
  // The maximum number of results to return within concept search.
  maxSearchResults: number;
  // The minimum number of characters required to submit a query to the terminology server.
  minQueryLength: number;
  // Use the advanced ECL editor with Monaco-based syntax highlighting,
  // autocompletion, and validation. Requires the following packages:
  // @aehrc/ecl-editor-react (which requires React >= 18),
  // @monaco-editor/react, and monaco-editor.
  eclEditor: boolean;
}

export const OptionsContext = createContext<ExpressionBuilderOptions>(
  applyDefaultOptions({}),
);

/**
 * This is the top-level component of the ECL builder, providing context and
 * rendering a tabbed container for the visual and code views.
 * @param root0
 * @param root0.expression
 * @param root0.onChange
 * @param root0.onDiagnosticsChange
 * @param root0.options
 * @author John Grimes
 */
export default function ExpressionBuilder({
  expression: initialExpression,
  onChange,
  onDiagnosticsChange,
  options = {},
}: ExpressionBuilderProps) {
  const resolvedOptions = applyDefaultOptions(options);
  const [tab, setTab] = useState("visual"),
    [expression, setExpression] = useState(initialExpression);

  useEffect(() => {
    setExpression(initialExpression);
  }, [initialExpression]);

  function handleChange(newExpression: string) {
    setExpression(newExpression);
    if (onChange) {
      onChange(newExpression);
    }
  }

  return (
    <ThemeProvider theme={(base: Theme) => extendTheme(base)}>
      <QueryClientProvider client={queryClient}>
        <OptionsContext.Provider value={resolvedOptions}>
          <CssBaseline />
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="flex-end"
          >
            <Tabs
              value={tab}
              onChange={(_, value: string) => {
                setTab(value);
                if (value !== "code") {
                  onDiagnosticsChange?.([]);
                }
              }}
              sx={{ flexGrow: 1 }}
            >
              <Tab
                id="tab-visual"
                key="visual"
                label="Visual"
                value="visual"
                title="Switch to the visual expression builder"
                icon={<Visibility fontSize="small" />}
              />
              <Tab
                id="tab-code"
                key="code"
                label="Code"
                value="code"
                title="Switch to the code editor"
                icon={<Code fontSize="small" />}
              />
            </Tabs>
            {expression ? <CopyExpression expression={expression} /> : null}
            {expression ? <CopyValueSet expression={expression} /> : null}
          </Stack>
          <TabPanel id="visual" key="visual" selectedId={tab}>
            <FocusProvider>
              <VisualBuilder
                expression={expression ?? ""}
                onChange={handleChange}
              />
            </FocusProvider>
          </TabPanel>
          <TabPanel id="code" key="code" selectedId={tab}>
            {resolvedOptions.eclEditor ? (
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <LazyEclCodeEditor
                    expression={expression ?? ""}
                    onChange={handleChange}
                    onDiagnosticsChange={onDiagnosticsChange}
                  />
                </Suspense>
              </ErrorBoundary>
            ) : (
              <CodeEditor
                expression={expression ?? ""}
                onChange={handleChange}
              />
            )}
          </TabPanel>
        </OptionsContext.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

/**
 * Default configuration options.
 * @param options
 */
function applyDefaultOptions(
  options: Partial<ExpressionBuilderOptions>,
): ExpressionBuilderOptions {
  return {
    terminologyServerUrl: "https://tx.ontoserver.csiro.au/fhir",
    maxSearchResults: 10,
    minQueryLength: 3,
    eclEditor: false,
    ...options,
  };
}
