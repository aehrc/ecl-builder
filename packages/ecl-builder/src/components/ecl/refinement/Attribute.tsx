/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { Children, PropsWithChildren } from "react";
import { interleave } from "../../../array";
import HorizontalLink from "../HorizontalLink";
import RemoveButton from "../RemoveButton";

export interface AttributeProps extends PropsWithChildren {
  onRemove?: () => unknown;
}

export default function Attribute({ children, onRemove }: AttributeProps) {
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
    <Stack className="attribute" direction="row" spacing={1}>
      <Stack
        className="attribute-removal-context"
        direction="row"
        flexGrow={1}
        alignItems="flex-start"
      >
        {interleavedChildren}
      </Stack>
      {onRemove ? (
        <RemoveButton
          tooltip="Remove this attribute from the refinement"
          sx={{
            position: "relative",
            left: "4px",
          }}
          onClick={onRemove}
        />
      ) : null}
    </Stack>
  );
}
