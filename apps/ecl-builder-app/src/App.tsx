import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ExpressionBuilder from "ecl-builder";
import ExpressionResult from "ecl-builder/lib/components/ExpressionResult";
import React, { useState } from "react";

let theme = createTheme();
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "& #root": {
            display: "flex",
          },
        },
      },
    },
  },
});

function App() {
  const [currentExpression, setCurrentExpression] =
    useState<string | undefined>(undefined);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="app-container"
        sx={{
          display: "flex",
          p: 8,
          gap: 4,
          flexWrap: "wrap",
          flexDirection: "row",
          flexGrow: 1,
          [theme.breakpoints.down("lg")]: {
            p: 2,
          },
        }}
      >
        <Box className="expression-builder-container" sx={{ flexGrow: 1 }}>
          <ExpressionBuilder
            expression={currentExpression}
            onChange={setCurrentExpression}
          />
        </Box>
        {currentExpression ? (
          <Box className="expression-result-container" sx={{ flexGrow: 1 }}>
            <ExpressionResult expression={currentExpression} />
          </Box>
        ) : null}
      </Box>
    </ThemeProvider>
  );
}

export default App;
