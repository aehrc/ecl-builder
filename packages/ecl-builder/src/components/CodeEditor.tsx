/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { TextField } from "@mui/material";
import React from "react";
import type { ExpressionDiagnostic } from "../types";

export interface CodeEditorProps {
  expression: string;
  onChange: (expression: string) => unknown;
  onDiagnosticsChange?: (diagnostics: ExpressionDiagnostic[]) => void;
}

/**
 * A basic editor for manipulating the expression in its raw ECL form.
 *
 * @author John Grimes
 */
export default function CodeEditor({ expression, onChange }: CodeEditorProps) {
  return (
    <TextField
      className="code-editor"
      onChange={(ev) => onChange(ev.target.value)}
      value={expression}
      fullWidth
      multiline
      sx={{
        "& .MuiInputBase-input.MuiOutlinedInput-input": {
          fontSize: "0.85em",
          fontFamily: "monospace",
        },
      }}
    />
  );
}
