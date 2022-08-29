/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import RemoveButton from "../RemoveButton";

export interface AttributeProps extends PropsWithChildren {
  onRemove?: () => unknown;
}

export default function Attribute({ children, onRemove }: AttributeProps) {
  return (
    <Stack className="attribute" direction="row" spacing={1}>
      <Stack className="attribute-removal-context" direction="row" flexGrow={1}>
        {children}
      </Stack>
      <RemoveButton
        tooltip="Remove this attribute from the refinement"
        onClick={onRemove}
      />
    </Stack>
  );
}
