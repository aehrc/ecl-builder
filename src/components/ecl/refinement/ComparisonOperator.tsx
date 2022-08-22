/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import { ChangeReporterProps } from "../ExpressionVisitor";
import HorizontalLink from "../HorizontalLink";

export interface ExpressionComparisonOperatorProps extends ChangeReporterProps {
  type: ComparisonOperatorType;
}

export const comparisonOperatorToLabel = {
  "=": "is equal to",
  "!=": "is not equal to",
};

export type ComparisonOperatorType = keyof typeof comparisonOperatorToLabel;

export default function ComparisonOperator({
  type,
  onChange,
}: ExpressionComparisonOperatorProps) {
  const horizontalLinkStyle = { marginTop: "1.85em", alignSelf: "flex-start" };

  function handleSelectOperator(
    event: SelectChangeEvent<ComparisonOperatorType>
  ) {
    onChange(event.target.value as ComparisonOperatorType);
  }

  return (
    <>
      <HorizontalLink style={horizontalLinkStyle} />
      <Select
        value={type}
        onChange={handleSelectOperator}
        sx={{
          alignSelf: "flex-start",
          borderWidth: 1,
          borderColor: "grey.400",
          borderStyle: "solid",
          borderRadius: 1,
        }}
      >
        {Object.entries(comparisonOperatorToLabel).map(([operator, label]) => (
          <MenuItem key={operator} value={operator}>
            {label}
          </MenuItem>
        ))}
      </Select>
      <HorizontalLink style={horizontalLinkStyle} />
    </>
  );
}
