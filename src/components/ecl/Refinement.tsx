/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  useTheme,
} from "@mui/material";
import React, { PropsWithChildren } from "react";
import ExpressionGrouping from "./ExpressionGrouping";
import { LogicStatementType } from "./LogicStatement";

export interface RefinementProps extends PropsWithChildren {
  type?: LogicStatementType;
  onChangeType: (type: LogicStatementType) => unknown;
}

export default function Refinement({
  type = "conjunction",
  onChangeType,
  children,
}: RefinementProps) {
  const theme = useTheme();

  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  return (
    <Stack direction="row">
      <hr
        style={{
          width: theme.spacing(2),
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
      <ExpressionGrouping
        heading={
          <Select
            value={type}
            onChange={handleSelectType}
            sx={{ backgroundColor: "background.default" }}
          >
            <MenuItem value="conjunction">
              with all of these attributes
            </MenuItem>
            <MenuItem value="disjunction">
              with any of these attributes
            </MenuItem>
          </Select>
        }
        className="refinement"
        actions={[]}
        sx={{ mt: "2.8em" }}
      >
        <Stack spacing={1}>{children}</Stack>
      </ExpressionGrouping>
    </Stack>
  );
}
