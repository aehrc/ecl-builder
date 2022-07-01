/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import ConstraintOperator from "./ConstraintOperator";

export interface SubExpressionProps extends PropsWithChildren {
  constraint?: any;
  onChange: (expression: string) => unknown;
}

export default function SubExpression({
  constraint,
  onChange,
  children,
}: SubExpressionProps) {
  return (
    <Stack
      direction="row"
      className="ECL-subExpression"
      alignItems="flex-start"
    >
      {constraint ? null : <ConstraintOperator onChange={onChange} />}
      {children}
    </Stack>
  );
}
