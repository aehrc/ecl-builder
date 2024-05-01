/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack, Theme, useTheme } from "@mui/material";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";
import React, { PropsWithChildren } from "react";
import { grey } from "../../themes/color";

export interface NeatRowProps extends PropsWithChildren {
  className?: string;
  disableActionsHide?: boolean;
  sx?: SystemStyleObject<Theme>;
}

export default function NeatRow({
  className,
  disableActionsHide,
  sx,
  children,
}: NeatRowProps) {
  const theme = useTheme(),
    baseStyles = {
      flexGrow: 1,
      backgroundColor: grey(theme, 4),
      p: "1px",
      borderRadius: "4px",
    },
    noHideStyles = {
      "& > *:first-child": {
        borderRadius: "3px 0 0 3px",
        overflow: "hidden",
        "&:last-child": {
          borderRadius: "3px",
        },
      },
      "& > *:last-child": {
        borderRadius: "0 3px 3px 0",
        overflow: "hidden",
      },
    },
    hideStyles = {
      "& > *:first-child": {
        borderRadius: "3px 0 0 3px",
        overflow: "hidden",
        "&:nth-last-child(2)": {
          borderRadius: "3px",
        },
      },
      "& > *:nth-last-child(2)": {
        borderRadius: "0 3px 3px 0",
        overflow: "hidden",
      },
      "& > *:last-child.actions": { display: "none" },
      "&:focus-within, &:hover": {
        "& > *:first-child": {
          "&:nth-last-child(2)": {
            borderRadius: "3px 0 0 3px",
          },
          "&:last-child": {
            borderRadius: "3px",
          },
        },
        "& > *:nth-last-child(2)": {
          borderRadius: 0,
        },
        "& > *:last-child, &:hover > *:last-child": {
          borderRadius: "0 3px 3px 0",
          overflow: "hidden",
        },
        "& > *:last-child.actions, &:hover > *:last-child.actions": {
          display: "block",
        },
      },
    };

  return (
    <Stack
      className={`neat-row ${className}`}
      direction="row"
      alignItems="stretch"
      alignSelf="stretch"
      spacing="1px"
      sx={{
        ...baseStyles,
        ...(disableActionsHide ? noHideStyles : hideStyles),
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
}
