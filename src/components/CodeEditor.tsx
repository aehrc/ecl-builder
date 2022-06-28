/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { TextField } from "@mui/material";
import React from "react";

interface Props {
  expression: string;
  onChange: (expression: string) => unknown;
}

export default function CodeEditor({ expression, onChange }: Props) {
  return (
    <TextField
      value={expression}
      multiline
      fullWidth
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
