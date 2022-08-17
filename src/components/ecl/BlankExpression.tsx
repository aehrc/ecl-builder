/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React, { useState } from "react";
import ConceptReference from "./ConceptReference";
import ConstraintOperator, {
  constraintNameToOperator,
  ConstraintType,
  operatorToConstraintName,
} from "./ConstraintOperator";
import { ChangeReporterProps } from "./ExpressionVisitor";
import SubExpression from "./SubExpression";

export interface BlankExpressionProps extends ChangeReporterProps {}

export default function BlankExpression({ onChange }: BlankExpressionProps) {
  const [constraint, setConstraint] =
    useState<ConstraintType>("descendantorselfof");

  function handleChange(expression: string) {
    onChange(`${constraintNameToOperator[constraint]} ${expression}`);
  }

  return (
    <SubExpression
      constraint={constraint}
      showActions={false}
      onAddConstraint={() => null}
      onRemoveConstraint={() => null}
      onAddLogicStatement={() => null}
    >
      <ConstraintOperator
        onChange={(operator) =>
          setConstraint(operatorToConstraintName[operator])
        }
      />
      <ConceptReference onChange={handleChange} />
    </SubExpression>
  );
}
