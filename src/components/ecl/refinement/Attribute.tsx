/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

export default function Attribute({ children }: PropsWithChildren) {
  return (
    <Stack className="attribute" direction="row">
      {children}
    </Stack>
  );
}
