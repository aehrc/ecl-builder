/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React, { useState } from "react";
import { ChangeReporterProps } from "./ExpressionVisitor";
import ConceptReference from "./sub/ConceptReference";
import ConstraintOperator, {
  constraintNameToOperator,
  ConstraintType,
  operatorToConstraintName,
} from "./sub/ConstraintOperator";
import SubExpression from "./sub/SubExpression";

export type BlankExpressionProps = ChangeReporterProps;

/**
 *
 * @param root0
 * @param root0.onChange
 */
export default function BlankExpression({ onChange }: BlankExpressionProps) {
  const [constraint, setConstraint] =
    useState<ConstraintType>("descendantorselfof");

  function handleChange(newExpression: string): void {
    onChange(`${constraintNameToOperator[constraint]} ${newExpression}`);
  }

  return (
    <SubExpression hideActions>
      <ConstraintOperator
        constraint={constraint}
        onChange={(e) => setConstraint(operatorToConstraintName[e])}
      />
      <ConceptReference onChange={handleChange} />
    </SubExpression>
  );
}
