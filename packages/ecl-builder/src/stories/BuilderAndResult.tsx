import { createTheme, Stack, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import ExpressionBuilder from "../components/ExpressionBuilder";
import ExpressionResult from "../components/ExpressionResult";

const theme = createTheme();

/**
 *
 * @param root0
 * @param root0.expression
 */
export default function BuilderAndResult({
  expression,
}: {
  expression?: string;
}) {
  const [currentExpression, setCurrentExpression] = useState<
    string | undefined
  >(expression);

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <ExpressionBuilder
          expression={currentExpression}
          onChange={setCurrentExpression}
        />
        {currentExpression ? (
          <ExpressionResult expression={currentExpression} />
        ) : null}
      </Stack>
    </ThemeProvider>
  );
}
