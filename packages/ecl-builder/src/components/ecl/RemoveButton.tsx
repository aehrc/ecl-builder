/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Clear } from "@mui/icons-material";
import { IconButton, Theme } from "@mui/material";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";
import React from "react";

export interface RemoveButtonProps {
  tooltip?: string;
  sx?: SystemStyleObject<Theme>;
  onClick?: () => unknown;
}

/**
 *
 * @param root0
 * @param root0.tooltip
 * @param root0.sx
 * @param root0.onClick
 */
export default function RemoveButton({
  tooltip,
  sx = {},
  onClick,
}: RemoveButtonProps) {
  return (
    <IconButton
      className="remove-button"
      size="small"
      title={tooltip ?? "Remove this expression"}
      sx={{ ...sx, alignSelf: "center", "&:hover": { color: "warning.main" } }}
      onClick={onClick}
    >
      <Clear />
    </IconButton>
  );
}
