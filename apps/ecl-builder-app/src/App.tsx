import {createTheme, ThemeProvider} from "@mui/material";
import ExpressionBuilder from "ecl-builder";
import React from "react";
import "./App.css";

const theme = createTheme();

function App() {
  return <ThemeProvider theme={theme}>
    <ExpressionBuilder />
  </ThemeProvider>;
}

export default App;
