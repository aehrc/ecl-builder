/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { TextField, TextFieldProps, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";
import React, { PropsWithChildren, useState } from "react";
import { ChangeReporterProps } from "../ExpressionVisitor";
import { useFocus } from "../FocusProvider";

export interface ConcreteValueProps
  extends ChangeReporterProps,
    PropsWithChildren {
  value: string;
  props?: TextFieldProps;
  sx?: SystemStyleObject<Theme>;
}

/**
 * Represents a concrete value in an attribute expression.
 *
 * @author John Grimes
 */
export default function ConcreteValue({
  value,
  props,
  sx,
  focus,
  onChange,
  children,
}: ConcreteValueProps) {
  const [currentValue, setCurrentValue] = useState(value),
    focusRef = useFocus(focus);

  return (
    <TextField
      inputRef={focusRef}
      value={currentValue}
      onChange={(e) => setCurrentValue(e.target.value)}
      onBlur={(e) => onChange(e.target.value)}
      sx={{
        flexGrow: 1,
        flexBasis: "128px",
        "& .MuiInputBase-root": {
          height: "57px",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </TextField>
  );
}
