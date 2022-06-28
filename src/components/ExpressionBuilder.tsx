/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Code, Visibility } from "@mui/icons-material";
import {
  createTheme,
  CssBaseline,
  Tab,
  Tabs,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import TabPanel from "./TabPanel";
import VisualBuilder from "./VisualBuilder";

interface Props {
  expression: string;
  onChange?: (expression: string) => unknown;
}

const theme = createTheme();

export default function ExpressionBuilder({
  expression: initialExpression,
  onChange,
}: Props) {
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
      <CssBaseline />
      <Tabs onChange={(_, value) => setTab(value)}>
        <Tab label="Visual" value="visual" icon={<Visibility />} />
        <Tab label="Code" value="code" icon={<Code />} />
      </Tabs>
      <TabPanel id="visual" selectedId={tab}>
        <VisualBuilder expression={expression} onChange={handleChange} />
      </TabPanel>
      <TabPanel id="code" selectedId={tab}>
        <CodeEditor expression={expression} onChange={handleChange} />
      </TabPanel>
    </ThemeProvider>
  );
}
