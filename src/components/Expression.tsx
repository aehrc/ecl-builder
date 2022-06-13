/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";
import { visitExpression } from "../ExpressionVisitor";

interface Props {
  expression: string;
  onChange?: (expression: string) => unknown;
}

export default function Expression({ expression, onChange }: Props) {
  return visitExpression(expression, onChange);
}