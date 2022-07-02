/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import ConstraintOperator from "./ConstraintOperator";
import { ChangeReporterProps } from "./ExpressionVisitor";

export interface SubExpressionProps
  extends PropsWithChildren,
    ChangeReporterProps {
  // The currently selected constraint type.
  constraint?: any;
}

/**
 * A component for rendering a sub-expression, which is basically a concept plus constraints,
 * additions and refinements.
 *
 * @author John Grimes
 */
export default function SubExpression({
  constraint,
  onChange,
  children,
}: SubExpressionProps) {
  return (
    <Stack
      className="sub-expression"
      direction="row"
      alignItems="flex-start"
      alignSelf="stretch"
      flexGrow={1}
    >
      {constraint ? null : <ConstraintOperator onChange={onChange} />}
      {children}
    </Stack>
  );
}
