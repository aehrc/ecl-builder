/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Clear } from "@mui/icons-material";
import { IconButton, SxProps, Theme } from "@mui/material";
import React from "react";

export interface RemoveButtonProps {
  tooltip?: string;
  sx?: SxProps<Theme>;
  onClick?: () => unknown;
}

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
