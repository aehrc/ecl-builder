/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Typography } from "@mui/material";
import React from "react";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./LogicStatement";

export interface LogicOperatorProps {
  type: LogicStatementType;
}

export default function LogicOperator({ type }: LogicOperatorProps) {
  return (
    <Typography sx={{ p: 1 }}>
      {logicStatementTypeToOperator[type].trim()}
    </Typography>
  );
}
