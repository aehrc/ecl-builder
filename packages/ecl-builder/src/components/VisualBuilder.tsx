/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box } from "@mui/material";
import React from "react";
import { visitExpression } from "./ecl/ExpressionVisitor";
import ErrorBoundary from "./ErrorBoundary";

export interface VisualBuilderProps {
  // The current expression being built.
  expression: string;
  // The current position within the expression that is the focus of user input.
  focusPosition: number | undefined;
  // A callback that is invoked when the expression changes.
  onChange: (expression: string) => unknown;
  // A callback that is invoked when the focus position changes.
  setFocusPosition: (position: number | undefined) => unknown;
}

/**
 * The top-level component for the visual mode of the builder.
 *
 * @author John Grimes
 */
export default function VisualBuilder({
  expression,
  focusPosition,
  onChange,
  setFocusPosition,
}: VisualBuilderProps) {
  return (
    <Box className="visual-builder">
      <ErrorBoundary>
        <>
          {visitExpression(
            expression,
            focusPosition,
            onChange,
            setFocusPosition
          )}
        </>
      </ErrorBoundary>
    </Box>
  );
}
