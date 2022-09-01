/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { MenuItem, Select, SelectChangeEvent, useTheme } from "@mui/material";
import React from "react";
import { grey } from "../../../themes/color";
import { ChangeReporterProps } from "../ExpressionVisitor";
import HorizontalLink from "../HorizontalLink";

export interface ComparisonOperatorProps<T extends string>
  extends ChangeReporterProps {
  type: T;
  typeLabelMap: Record<T, string>;
}

export default function ComparisonOperator<T extends string>({
  type,
  typeLabelMap,
  onChange,
}: ComparisonOperatorProps<T>) {
  const theme = useTheme(),
    horizontalLinkStyle = { marginTop: "1.85em", alignSelf: "flex-start" };

  function handleSelectOperator(event: SelectChangeEvent<T>) {
    onChange(event.target.value as T);
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
          borderColor: grey(theme, 4),
          borderStyle: "solid",
          borderRadius: 1,
        }}
      >
        {Object.keys(typeLabelMap).map((type) => (
          <MenuItem key={type} value={type}>
            {typeLabelMap[type as T]}
          </MenuItem>
        ))}
      </Select>
      <HorizontalLink style={horizontalLinkStyle} />
    </>
  );
}
