/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import RemoveExpression from "../RemoveExpression";

export interface LogicStatementSubExpressionProps extends PropsWithChildren {
  onRemove?: () => unknown;
}

export default function LogicStatementSubExpression({
  children,
  onRemove,
}: LogicStatementSubExpressionProps) {
  return (
    <Stack
      className="logic-statement-sub-expression"
      direction="row"
      spacing={1}
    >
      <RemoveExpression
        enabled={!!onRemove}
        tooltip="Remove this expression from the logic statement"
        onClick={onRemove}
        sx={{ display: "flex", flexGrow: 1, flexDirection: "row" }}
      >
        {children}
      </RemoveExpression>
    </Stack>
  );
}
