/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { visitExpression } from "./ecl/ExpressionVisitor";

interface Props {
  expression: string;
  onChange: (expression: string) => unknown;
}

/**
 * The top-level component for the visual mode of the builder.
 *
 * @author John Grimes
 */
export default function VisualBuilder({ expression, onChange }: Props) {
  return visitExpression(expression, onChange);
}
