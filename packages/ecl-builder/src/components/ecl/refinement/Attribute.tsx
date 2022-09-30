/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { Children, cloneElement, PropsWithChildren } from "react";
import { interleave } from "../../../array";
import HorizontalLink from "../HorizontalLink";
import RemoveExpression from "../RemoveExpression";

export interface AttributeProps extends PropsWithChildren {
  onRemove?: () => unknown;
}

export default function Attribute({ children, onRemove }: AttributeProps) {
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
    <Stack className="attribute" direction="row" spacing={1}>
      <RemoveExpression
        enabled={!!onRemove}
        tooltip="Remove this attribute from the refinement"
        onClick={onRemove}
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        {interleavedChildren}
      </RemoveExpression>
    </Stack>
  );
}
