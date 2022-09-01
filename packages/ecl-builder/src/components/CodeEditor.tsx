/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box, useTheme } from "@mui/material";
import React from "react";
import Editor from "react-simple-code-editor";
import { grey } from "../themes/color";

interface Props {
  expression: string;
  onChange: (expression: string) => unknown;
}

/**
 * An editor for manipulating the expression in its raw ECL form.
 *
 * @author John Grimes
 */
export default function CodeEditor({ expression, onChange }: Props) {
  const theme = useTheme();

  return (
    <Box
      className="code-editor"
      sx={{
        backgroundColor: "background.default",
        borderWidth: 1,
        borderColor: grey(theme, 4),
        borderStyle: "solid",
        borderRadius: 1,
        p: 2,
        userSelect: "none",
        fontSize: "0.85em",
        fontFamily: "monospace",
        "& .npm__react-simple-code-editor__textarea": {
          outline: "none",
        },
      }}
    >
      <Editor
        onValueChange={onChange}
        highlight={(code) => code}
        value={expression}
      />
    </Box>
  );
}
