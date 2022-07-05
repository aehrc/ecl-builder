/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface ComponentLabelProps extends PropsWithChildren {}

/**
 * Renders a label that can be used to render static parts of expressions.
 *
 * @author John Grimes
 */
export default function ComponentLabel({ children }: ComponentLabelProps) {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        borderWidth: 1,
        borderColor: "grey.400",
        borderStyle: "solid",
        borderRadius: 1,
        p: "0.95em",
        userSelect: "none",
      }}
    >
      {children}
    </Box>
  );
}
