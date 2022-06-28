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
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import { visitExpression } from "../ExpressionVisitor";
import TabPanel from "./TabPanel";

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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setExpression(event.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Tabs onChange={(_, value) => setTab(value)}>
        <Tab label="Visual" value="visual" icon={<Visibility />} />
        <Tab label="Code" value="code" icon={<Code />} />
      </Tabs>
      <TabPanel id="visual" selectedId={tab}>
        {visitExpression(expression, onChange)}
      </TabPanel>
      <TabPanel id="code" selectedId={tab}>
        <TextField
          value={expression}
          multiline
          fullWidth
          onChange={handleChange}
        />
      </TabPanel>
    </ThemeProvider>
  );
}
