/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Alert, TextField, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { grey } from "../../themes/color";
import { ChangeReporterProps } from "./ExpressionVisitor";
import { useFocus } from "./FocusProvider";

export interface FallbackProps extends ChangeReporterProps {
  // A friendly name for the type of expression that cannot be rendered.
  name: string;
  // The expression that cannot be rendered.
  expression: string;
}

export default function Fallback({
  name,
  expression,
  focus,
  onChange,
  onFocus,
}: FallbackProps) {
  const theme = useTheme(),
    [currentValue, setCurrentValue] = useState(expression),
    focusRef = useFocus(focus);

  return (
    <Alert
      severity="warning"
      sx={{
        borderColor: grey(theme, 4),
        borderWidth: 1,
        borderStyle: "solid",
        flexGrow: 1,
      }}
    >
      <Typography variant="body2">
        <span>&ldquo;{name}&rdquo;</span> expressions are not currently
        supported in the visual builder.
      </Typography>
      <TextField
        inputRef={focusRef}
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        onFocus={onFocus}
        onBlur={(e) => onChange(e.target.value)}
        sx={{
          mt: 2,
          "& .MuiInputBase-input": {
            fontSize: "0.8em",
            fontFamily: "monospace",
          },
        }}
        size="small"
        fullWidth
      />
    </Alert>
  );
}
