/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Code, Visibility } from "@mui/icons-material";
import { CssBaseline, Tab, Tabs, ThemeProvider } from "@mui/material";
import React, { createContext, useState } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../queryClient";
import { theme } from "../theme";
import CodeEditor from "./CodeEditor";
import TabPanel from "./TabPanel";
import VisualBuilder from "./VisualBuilder";

export interface ExpressionBuilderProps {
  // The current expression being built.
  expression?: string;
  // Invoked when the expression is updated.
  onChange?: (expression: string) => unknown;
  // A set of options that control the behaviour of the component.
  options?: Partial<ExpressionBuilderOptions>;
}

export interface ExpressionBuilderOptions {
  // The URL of the FHIR terminology server to use for concept search.
  terminologyServerUrl: string;
  // The maximum number of results to return within concept search.
  searchMaxResults: number;
}

export const OptionsContext = createContext<ExpressionBuilderOptions>(
  applyDefaultOptions({})
);

/**
 * This is the top-level component of the ECL builder, providing context and
 * rendering a tabbed container for the visual and code views.
 *
 * @author John Grimes
 */
export default function ExpressionBuilder({
  expression: initialExpression,
  onChange,
  options = {},
}: ExpressionBuilderProps) {
  const [tab, setTab] = useState("visual"),
    [expression, setExpression] = useState(initialExpression);

  function handleChange(newExpression: string) {
    setExpression(newExpression);
    if (onChange) {
      onChange(newExpression);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <OptionsContext.Provider value={applyDefaultOptions(options)}>
          <CssBaseline />
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab
              key="visual"
              label="Visual"
              value="visual"
              icon={<Visibility fontSize="small" />}
            />
            <Tab
              key="code"
              label="Code"
              value="code"
              icon={<Code fontSize="small" />}
            />
          </Tabs>
          <TabPanel id="visual" key="visual" selectedId={tab}>
            <VisualBuilder
              expression={expression ?? ""}
              onChange={handleChange}
            />
          </TabPanel>
          <TabPanel id="code" key="code" selectedId={tab}>
            <CodeEditor expression={expression ?? ""} onChange={handleChange} />
          </TabPanel>
        </OptionsContext.Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

/**
 * Default configuration options.
 */
function applyDefaultOptions(
  options: Partial<ExpressionBuilderOptions>
): ExpressionBuilderOptions {
  return {
    terminologyServerUrl: "https://tx.ontoserver.csiro.au/fhir",
    searchMaxResults: 10,
    ...options,
  };
}
