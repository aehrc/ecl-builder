/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { Children, PropsWithChildren, ReactNode } from "react";
import { interleave } from "../../../array";
import HorizontalLink from "../HorizontalLink";
import RefinementConnector from "./RefinementConnector";

export interface RefinedExpressionProps extends PropsWithChildren {
  subExpression: ReactNode;
}

export default function RefinedExpression({
  subExpression,
  children,
}: RefinedExpressionProps) {
  const childrenArray = Children.toArray(children),
    interleavedChildren = interleave(
      childrenArray,
      new Array(childrenArray.length - 1).fill(
        <HorizontalLink
          style={{ marginTop: "28px", alignSelf: "flex-start" }}
        />
      )
    );
  return (
    <Stack className="refined-expression" alignItems="stretch" flexGrow={1}>
      {subExpression}
      <Stack className="refinement" direction="row">
        <RefinementConnector />
        <Stack
          className="refinement-content"
          direction="row"
          flexGrow={1}
          alignItems="flex-start"
          sx={{ pt: 2 }}
        >
          {interleavedChildren}
        </Stack>
      </Stack>
    </Stack>
  );
}
