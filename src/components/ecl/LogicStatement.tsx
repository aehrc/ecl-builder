/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

export type LogicStatementType = "conjunction" | "disjunction";

export interface LogicStatementProps extends PropsWithChildren {
  type: LogicStatementType;
  onChangeType: (type: LogicStatementType) => unknown;
}

export const logicStatementTypeToOperator: Record<LogicStatementType, string> =
  {
    // These have a space after them due to the "mws" in the parser rule.
    conjunction: "AND ",
    disjunction: "OR ",
  };

export default function LogicStatement({
  type,
  onChangeType,
  children,
}: LogicStatementProps) {
  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  return (
    <Stack
      className="expression-grouping"
      spacing={2}
      sx={{
        p: 2,
        borderWidth: 1,
        borderColor: "grey.800",
        borderStyle: "dashed",
        borderRadius: 1,
        mt: "18px",
        backgroundColor: "grey.100",
        ".expression-grouping &": {
          backgroundColor: "background.default",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{ position: "relative", top: -35, marginBottom: "-30px" }}
      >
        <Select
          value={type}
          onChange={handleSelectType}
          sx={{ backgroundColor: "background.default" }}
        >
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
