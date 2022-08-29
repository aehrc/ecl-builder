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

export default function BlankExpression({ onChange }: BlankExpressionProps) {
  const [constraint, setConstraint] =
    useState<ConstraintType>("descendantorselfof");

  function handleChange(expression: string) {
    onChange(`${constraintNameToOperator[constraint]} ${expression}`);
  }

  return (
    <SubExpression constraint={!!constraint} hideActions>
      <ConstraintOperator
        constraint={constraint}
        onChange={(operator) =>
          setConstraint(operatorToConstraintName[operator])
        }
      />
      <ConceptReference onChange={handleChange} />
    </SubExpression>
  );
}
