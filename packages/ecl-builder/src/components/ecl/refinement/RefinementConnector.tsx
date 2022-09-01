/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { useTheme } from "@mui/material";
import React from "react";

export default function RefinementConnector() {
  const theme = useTheme();

  return (
    <hr
      className="refinement-connector"
      style={{
        minWidth: theme.spacing(2),
        height: theme.spacing(8),
        margin: 0,
        border: 0,
        borderLeftColor: theme.palette.grey[400],
        borderLeftStyle: "solid",
        borderLeftWidth: 1,
        borderBottomColor: theme.palette.grey[400],
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
        marginLeft: theme.spacing(2),
        alignSelf: "flex-start",
      }}
    />
  );
}
