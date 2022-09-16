/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { MenuItem, Select, SelectChangeEvent, useTheme } from "@mui/material";
import React from "react";
import { grey } from "../../../themes/color";
import { ChangeReporterProps } from "../ExpressionVisitor";
import { useFocus } from "../FocusProvider";

export interface ComparisonOperatorProps<T extends string>
  extends ChangeReporterProps {
  type: T;
  typeLabelMap: Record<T, string>;
}

/**
 * Represents an operator that compares an attribute name with an attribute value.
 *
 * @author John Grimes
 */
export default function ComparisonOperator<T extends string>({
  type,
  typeLabelMap,
  focus,
  onChange,
}: ComparisonOperatorProps<T>) {
  const theme = useTheme(),
    focusRef = useFocus(focus);

  function handleSelectOperator(event: SelectChangeEvent<T>) {
    onChange(event.target.value as T);
  }

  return (
    <Select
      inputRef={focusRef}
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
  );
}
