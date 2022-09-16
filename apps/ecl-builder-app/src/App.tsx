import { Box, createTheme, Grid, ThemeProvider } from "@mui/material";
import ExpressionBuilder from "ecl-builder";
import ExpressionResult from "ecl-builder/lib/components/ExpressionResult";
import React, { useState } from "react";

const theme = createTheme();

function App() {
  const [currentExpression, setCurrentExpression] =
    useState<string | undefined>(undefined);

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          height: "100vh",
          p: 8,
          [theme.breakpoints.down("lg")]: {
            p: 2,
          },
        })}
      >
        <Grid container spacing={4} columnSpacing={12}>
          <Grid item xs={12} xl={8} sx={{ overflow: "hidden" }}>
            <ExpressionBuilder
              expression={currentExpression}
              onChange={setCurrentExpression}
            />
          </Grid>
          {currentExpression ? (
            <Grid item xs={12} xl={4}>
              <ExpressionResult expression={currentExpression} />
            </Grid>
          ) : null}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
