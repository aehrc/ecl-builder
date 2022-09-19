/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

export type GroupingHeadingProps = PropsWithChildren;

export default function GroupingHeading({ children }: GroupingHeadingProps) {
  return (
    <Stack
      className="grouping-heading"
      direction="row"
      sx={{ position: "absolute", top: "-16px" }}
    >
      {children}
    </Stack>
  );
}
