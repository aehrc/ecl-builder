/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Alert, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
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
  const [currentValue, setCurrentValue] = useState(expression),
    focusRef = useFocus(focus);

  return (
    <Alert severity="warning">
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
        sx={{ mt: 2 }}
        size="small"
        fullWidth
      />
    </Alert>
  );
}
