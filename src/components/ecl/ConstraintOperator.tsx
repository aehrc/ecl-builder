/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";

export interface ConstraintOperatorProps {
  // The currently selected constraint type.
  constraint?: ConstraintType;
  // Invoked when expression is updated.
  onChange: (expression: string) => unknown;
}

export const constraintNameToOperator = {
  self: null,
  childof: "<!",
  childorselfof: "<<!",
  descendantorselfof: "<<",
  descendantof: "<",
  parentof: ">!",
  parentorselfof: ">>!",
  ancestororselfof: ">>",
  ancestorof: ">",
};
export const operatorToConstraintName: { [operator: string]: ConstraintType } =
  Object.fromEntries(
    Object.entries(constraintNameToOperator)
      .filter((entry) => entry[1] !== null)
      .map((entry) => entry.reverse())
  );

type ConstraintType = keyof typeof constraintNameToOperator;

/**
 * Represents a constraint operator, that modifies the scope of a subexpression.
 */
export default function ConstraintOperator({
  constraint,
  onChange,
}: ConstraintOperatorProps) {
  const [selectedConstraint, setSelectedConstraint] = useState<ConstraintType>(
    constraint || "self"
  );

  function handleSelectConstraint(
    event: SelectChangeEvent<ConstraintType>
  ): void {
    const newConstraint = event.target.value as ConstraintType;
    setSelectedConstraint(newConstraint);
    onChange(buildExpression(newConstraint));
  }

  function buildExpression(constraint: ConstraintType): string {
    const operator = constraintNameToOperator[constraint];
    return operator ?? "";
  }

  return (
    <Select value={selectedConstraint} onChange={handleSelectConstraint}>
      <MenuItem value="self">only</MenuItem>
      <MenuItem value="childof">children of</MenuItem>
      <MenuItem value="childorselfof">self and children of</MenuItem>
      <MenuItem value="descendantorselfof">self and descendants of</MenuItem>
      <MenuItem value="descendantof">descendants of</MenuItem>
      <MenuItem value="parentof">parents of</MenuItem>
      <MenuItem value="parentorselfof">self and parents of</MenuItem>
      <MenuItem value="ancestororselfof">self and ancestors of</MenuItem>
      <MenuItem value="ancestorof">ancestors of</MenuItem>
    </Select>
  );
}
