/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";
import { ChangeReporterProps } from "./ExpressionVisitor";
import ConceptReference from "./sub/ConceptReference";
import SubExpression from "./sub/SubExpression";

export type BlankExpressionProps = ChangeReporterProps;

export default function BlankExpression({ onChange }: BlankExpressionProps) {
  return (
    <SubExpression hideActions>
      <ConceptReference onChange={onChange} />
    </SubExpression>
  );
}
