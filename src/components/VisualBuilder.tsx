/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box } from "@mui/material";
import React from "react";
import { visitExpression } from "./ecl/ExpressionVisitor";
import ErrorBoundary from "./ErrorBoundary";

export interface VisualBuilderProps {
  expression: string;
  onChange: (expression: string) => unknown;
}

/**
 * The top-level component for the visual mode of the builder.
 *
 * @author John Grimes
 */
export default function VisualBuilder(props: VisualBuilderProps) {
  return (
    <Box className="visual-builder">
      <ErrorBoundary>
        <Expression {...props} />
      </ErrorBoundary>
    </Box>
  );
}

function Expression({ expression, onChange }: VisualBuilderProps) {
  return <>{visitExpression(expression, onChange)}</>;
}
