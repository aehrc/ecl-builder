/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box, Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

export default function ExpressionConstraint({ children }: PropsWithChildren) {
  return (
    <Box className="ECL-expressionConstraint" sx={{ flexGrow: 1 }}>
      <Stack spacing={2}>{children}</Stack>
    </Box>
  );
}
