/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

/**
 * Represents the top-level of an ECL expression.
 *
 * @author John Grimes
 */
export default function ExpressionConstraint({ children }: PropsWithChildren) {
  return (
    <Stack
      className="expression-constraint"
      spacing={2}
      flexGrow={1}
      alignSelf="stretch"
    >
      {children}
    </Stack>
  );
}
