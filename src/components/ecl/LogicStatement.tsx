/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { MenuItem, Select, Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface LogicStatementProps extends PropsWithChildren {
  type: "conjunction" | "disjunction";
}

export default function LogicStatement({
  type,
  children,
}: LogicStatementProps) {
  return (
    <Stack
      className={`ECL-logicStatement`}
      spacing={2}
      sx={{
        p: 2,
        borderWidth: 1,
        borderColor: "grey.800",
        borderStyle: "dashed",
        borderRadius: 1,
        mt: "18px",
        backgroundColor: "grey.100",
        ".ECL-logicStatement &": {
          backgroundColor: "background.default",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{ position: "relative", top: -35, marginBottom: "-30px" }}
      >
        <Select value={type} sx={{ backgroundColor: "background.default" }}>
          <MenuItem value="conjunction">
            matching all of these conditions
          </MenuItem>
          <MenuItem value="disjunction">
            matching any of these conditions
          </MenuItem>
        </Select>
      </Stack>
      {children}
    </Stack>
  );
}
