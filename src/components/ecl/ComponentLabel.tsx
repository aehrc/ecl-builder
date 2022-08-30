/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box, SxProps } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface ComponentLabelProps extends PropsWithChildren {
  sx?: SxProps;
}

/**
 * Renders a label that can be used to render static parts of expressions.
 *
 * @author John Grimes
 */
export default function ComponentLabel({ sx, children }: ComponentLabelProps) {
  return (
    <Box
      className="component-label"
      sx={{
        backgroundColor: "background.default",
        p: "1.06em",
        userSelect: "none",
        fontSize: "0.95em",
        whiteSpace: "nowrap",
        alignSelf: "flex-start",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
