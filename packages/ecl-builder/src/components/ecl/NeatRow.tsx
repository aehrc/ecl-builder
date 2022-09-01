/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { grey } from "../../themes/color";

export interface NeatRowProps extends PropsWithChildren {
  className?: string;
}

export default function NeatRow({ className, children }: NeatRowProps) {
  return (
    <Stack
      className={className}
      direction="row"
      alignItems="flex-start"
      alignSelf="stretch"
      flexGrow={1}
      spacing="1px"
      sx={(theme) => ({
        backgroundColor: grey(theme, 4),
        p: "1px",
        borderRadius: "4px",
        "& > *:first-of-type": {
          borderRadius: "3px 0 0 3px",
          overflow: "hidden",
        },
        "& > *:last-child": {
          borderRadius: "0 3px 3px 0",
          overflow: "hidden",
        },
      })}
    >
      {children}
    </Stack>
  );
}
