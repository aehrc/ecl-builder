/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface GroupingHeadingProps extends PropsWithChildren {}

export default function GroupingHeading({ children }: GroupingHeadingProps) {
  return (
    <Stack direction="row" sx={{ position: "absolute", top: "-1.8em" }}>
      {children}
    </Stack>
  );
}
