/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";
import React, { PropsWithChildren } from "react";
import { grey } from "../../themes/color";

export interface NeatRowProps extends PropsWithChildren {
  className?: string;
  sx?: SystemStyleObject<Theme>;
}

export default function NeatRow({ className, sx, children }: NeatRowProps) {
  return (
    <Stack
      className={`neat-row ${className}`}
      direction="row"
      alignItems="flex-start"
      alignSelf="stretch"
      spacing="1px"
      sx={(theme) => ({
        flexGrow: 1,
        backgroundColor: grey(theme, 4),
        p: "1px",
        borderRadius: "4px",
        "& > *:first-child": {
          borderRadius: "3px 0 0 3px",
          overflow: "hidden",
          "&:nth-last-child(2)": {
            borderRadius: "3px",
          },
        },
        "&:focus-within > *:first-child": {
          "&:nth-last-child(2)": {
            borderRadius: "3px 0 0 3px",
          },
          "&:last-child": {
            borderRadius: "3px",
          },
        },
        "&:focus-within > *:nth-last-child(2)": {
          borderRadius: 0,
        },
        "&:focus-within > *:last-child": {
          borderRadius: "0 3px 3px 0",
          overflow: "hidden",
        },
        "& > *:nth-last-child(2)": {
          borderRadius: "0 3px 3px 0",
          overflow: "hidden",
        },
        "& > *:last-child.actions": { display: "none" },
        "&:focus-within > *:last-child.actions": { display: "block" },
        ...sx,
      })}
    >
      {children}
    </Stack>
  );
}
