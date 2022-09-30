/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, {
  Children,
  cloneElement,
  PropsWithChildren,
  ReactNode,
} from "react";
import { interleave } from "../../../array";
import HorizontalLink from "../HorizontalLink";
import RemoveExpression from "../RemoveExpression";
import RefinementConnector from "./RefinementConnector";

export interface RefinedExpressionProps extends PropsWithChildren {
  subExpression: ReactNode;
  onRemove?: () => unknown;
}

export default function RefinedExpression({
  subExpression,
  onRemove,
  children,
}: RefinedExpressionProps) {
  const childrenArray = Children.toArray(children),
    interleavedChildren = interleave(
      childrenArray,
      new Array(childrenArray.length - 1)
        .fill(
          <HorizontalLink
            style={{ marginTop: "28px", alignSelf: "flex-start" }}
          />
        )
        .map((child, i) => cloneElement(child, { key: `horizontal-link-${i}` }))
    );

  return (
    <Stack
      className="refined-expression"
      alignItems="stretch"
      flexGrow={1}
      sx={(theme) => ({
        "& > .MuiBadge-root > .MuiBadge-badge": { top: theme.spacing(4) },
      })}
    >
      {subExpression}
      <RemoveExpression
        enabled={!!onRemove}
        tooltip="Remove this refinement"
        onClick={onRemove}
        buttonSx={{ top: "20px" }}
      >
        <Stack className="refinement" direction="row" flexGrow={1}>
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
      </RemoveExpression>
    </Stack>
  );
}
