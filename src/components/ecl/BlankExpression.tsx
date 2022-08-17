/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React, { useState } from "react";
import ConceptConstraintSelector, {
  constraintNameToOperator,
  ConstraintType,
  operatorToConstraintName,
  REFERENCE_SET_VALUE_SET_URI,
} from "./ConceptConstraintSelector";
import ConceptReference from "./ConceptReference";
import ConceptSearchScope from "./ConceptSearchScope";
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
      <ConceptConstraintSelector
        onChange={(operator) =>
          setConstraint(operatorToConstraintName[operator])
        }
      />
      {constraint === "memberof" ? (
        <ConceptSearchScope.Provider
          value={{
            valueSet: REFERENCE_SET_VALUE_SET_URI,
            label: "Search for a reference set",
          }}
        >
          <ConceptReference onChange={handleChange} />
        </ConceptSearchScope.Provider>
      ) : (
        <ConceptReference onChange={handleChange} />
      )}
    </SubExpression>
  );
}
