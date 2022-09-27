/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";
import React, { PropsWithChildren } from "react";

export interface ComponentLabelProps extends PropsWithChildren {
  sx?: SystemStyleObject<Theme>;
}

/**
 * Renders a grouping of expressions designed to be displayed within a horizontal row.
 *
 * @author John Grimes
 */
export default function InlineExpressionGrouping({
  sx,
  children,
}: ComponentLabelProps) {
  return (
    <Stack
      className="inline-expression-grouping"
      direction="row"
      sx={{
        backgroundColor: "background.default",
        p: "16px",
        userSelect: "none",
        fontSize: "0.95em",
        whiteSpace: "nowrap",
        alignSelf: "flex-start",
        flexGrow: 1,
        gap: "4px",
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}
