/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { useTheme } from "@mui/material";
import React from "react";

export interface HorizontalLinkProps {
  style?: React.CSSProperties | undefined;
}

/**
 * A horizontal line that suggests that two adjacent controls are related.
 *
 * @author John Grimes
 */
export default function HorizontalLink({ style = {} }: HorizontalLinkProps) {
  const theme = useTheme();

  return (
    <hr
      style={{
        width: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[400]}`,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: 0,
        height: 1,
        margin: 0,
        alignSelf: "center",
        ...style,
      }}
    />
  );
}
