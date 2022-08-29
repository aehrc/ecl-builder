/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import RemoveButton from "../RemoveButton";

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
      <Stack
        className="logic-statement-sub-expression-removal-context"
        direction="row"
        flexGrow={1}
      >
        {children}
      </Stack>
      <RemoveButton
        tooltip="Remove this expression from the logic statement"
        onClick={onRemove}
      />
    </Stack>
  );
}
