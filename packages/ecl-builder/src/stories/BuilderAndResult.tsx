import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import type { ExpressionDiagnostic } from "../types";
import ExpressionBuilder from "../components/ExpressionBuilder";
import ExpressionResult from "../components/ExpressionResult";

const theme = createTheme();

export default function BuilderAndResult({
  expression,
}: {
  expression?: string;
}) {
  const [currentExpression, setCurrentExpression] = useState<
    string | undefined
  >(expression);
  const [diagnostics, setDiagnostics] = useState<ExpressionDiagnostic[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <ExpressionBuilder
          expression={currentExpression}
          onChange={setCurrentExpression}
          onDiagnosticsChange={setDiagnostics}
        />
        {currentExpression ? (
          <ExpressionResult
            expression={currentExpression}
            diagnostics={diagnostics}
          />
        ) : null}
      </Stack>
    </ThemeProvider>
  );
}
