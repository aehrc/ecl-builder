/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Close } from "@mui/icons-material";
import { alpha, Box, IconButton, Theme, useTheme } from "@mui/material";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";
import React, { PropsWithChildren, useState } from "react";
import {
  ClassNameForwardingProps,
  StyleForwardingProps,
} from "./ExpressionVisitor";

export interface RemoveExpressionProps
  extends StyleForwardingProps,
    ClassNameForwardingProps,
    PropsWithChildren {
  enabled?: boolean;
  tooltip?: string;
  buttonSx?: SystemStyleObject<Theme>;
  onClick?: () => unknown;
}

export default function RemoveExpression({
  enabled = true,
  tooltip = "Remove this expression",
  sx,
  buttonSx,
  onClick,
  children,
}: RemoveExpressionProps) {
  const theme = useTheme(),
    [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <Box
      className="removal-context"
      sx={{
        position: "relative",
        flexGrow: 1,
        "& > .MuiIconButton-root": {
          display: "none",
        },
        "&:focus-within > .MuiIconButton-root, &:hover > .MuiIconButton-root": {
          display: enabled ? "inline-flex" : "none",
        },
        ...sx,
      }}
    >
      {children}
      {overlayVisible && (
        <Box
          className="removal-overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "3px",
            width: "100%",
            height: "100%",
            backgroundColor: alpha(theme.palette.error.main, 0.2),
          }}
        />
      )}
      <IconButton
        title={tooltip}
        onClick={onClick}
        onMouseEnter={() => setOverlayVisible(true)}
        onMouseLeave={() => setOverlayVisible(false)}
        onFocus={() => setOverlayVisible(true)}
        onBlur={() => setOverlayVisible(false)}
        sx={{
          display: enabled ? "inline-flex" : "none",
          position: "absolute",
          top: "-12px",
          right: "-12px",
          padding: "5px",
          backgroundColor: theme.palette.grey[400],
          color: theme.palette.getContrastText(theme.palette.grey[400]),
          "&:hover, &:focus": {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.getContrastText(theme.palette.error.main),
          },
          ...buttonSx,
        }}
      >
        <Close sx={{ fontSize: "14px" }} />
      </IconButton>
    </Box>
  );
}
