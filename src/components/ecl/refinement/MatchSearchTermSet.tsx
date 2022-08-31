/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { TextField } from "@mui/material";
import React, { useState } from "react";
import { ChangeReporterProps } from "../ExpressionVisitor";

export interface MatchSearchTermSetProps extends ChangeReporterProps {
  value: string;
}

export default function MatchSearchTermSet({
  value,
  onChange,
}: MatchSearchTermSetProps) {
  const [currentValue, setCurrentValue] = useState(value);
  return (
    <TextField
      value={currentValue}
      onChange={(e) => setCurrentValue(e.target.value)}
      onBlur={(e) => onChange(e.target.value)}
      sx={{ flexGrow: 1, flexBasis: "8em" }}
    />
  );
}
