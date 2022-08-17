/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import React from "react";
import { SCT_URI } from "../../constants";
import { ChangeReporterProps } from "./ExpressionVisitor";
import HorizontalLink from "./HorizontalLink";

export interface ConceptConstraintSelectorProps extends ChangeReporterProps {
  // The currently selected constraint type.
  constraint?: ConstraintType;
}

export const constraintNameToOperator = {
  childof: "<!",
  childorselfof: "<<!",
  descendantorselfof: "<<",
  descendantof: "<",
  parentof: ">!",
  parentorselfof: ">>!",
  ancestororselfof: ">>",
  ancestorof: ">",
  memberof: "^",
};
export const operatorToConstraintName: Record<string, ConstraintType> =
  Object.fromEntries(
    Object.entries(constraintNameToOperator)
      .filter((entry) => entry[1] !== null)
      .map((entry) => entry.reverse())
  );

export type ConstraintType = keyof typeof constraintNameToOperator;

export default function ConceptConstraintSelector({
  constraint,
  onChange,
}: ConceptConstraintSelectorProps) {
  function handleSelectConstraint(
    event: SelectChangeEvent<ConstraintType>
  ): void {
    const newConstraint = event.target.value as ConstraintType;
    onChange(buildExpression(newConstraint));
  }

  function buildExpression(constraint: ConstraintType): string {
    const operator = constraintNameToOperator[constraint];
    return operator ?? "";
  }

  return (
    <Stack className="concept-constraint-selector" direction="row">
      <Select
        value={constraint || "descendantorselfof"}
        onChange={handleSelectConstraint}
      >
        <MenuItem value="descendantorselfof">self and descendants of</MenuItem>
        <MenuItem value="ancestororselfof">self and ancestors of</MenuItem>
        <MenuItem value="childorselfof">self and children of</MenuItem>
        <MenuItem value="parentorselfof">self and parents of</MenuItem>
        <MenuItem value="descendantof">descendants of</MenuItem>
        <MenuItem value="ancestorof">ancestors of</MenuItem>
        <MenuItem value="childof">children of</MenuItem>
        <MenuItem value="parentof">parents of</MenuItem>
        <MenuItem value="memberof">member of</MenuItem>
      </Select>
      <HorizontalLink />
    </Stack>
  );
}
export const REFERENCE_SET_VALUE_SET_URI = `${SCT_URI}?fhir_vs=ecl/%3C%20446609009%20`;