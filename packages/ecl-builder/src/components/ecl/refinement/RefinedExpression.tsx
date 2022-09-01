/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren, ReactNode } from "react";
import RefinementConnector from "./RefinementConnector";

export interface RefinedExpressionProps extends PropsWithChildren {
  subExpression: ReactNode;
}

export default function RefinedExpression({
  subExpression,
  children,
}: RefinedExpressionProps) {
  return (
    <Stack className="refined-expression" alignItems="stretch" flexGrow={1}>
      {subExpression}
      <Stack className="refinement" direction="row">
        <RefinementConnector />
        <Stack
          className="refinement-content"
          direction="row"
          flexGrow={1}
          sx={{ pt: 2 }}
        >
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}
