/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box } from "@mui/material";
import React, { useContext } from "react";
import { visitExpression } from "./ecl/ExpressionVisitor";
import { FocusContext } from "./ecl/FocusProvider";
import ErrorBoundary from "./ErrorBoundary";

export interface VisualBuilderProps {
  // The current expression being built.
  expression: string;
  // A callback that is invoked when the expression changes.
  onChange: (expression: string) => unknown;
}

/**
 * The top-level component for the visual mode of the builder.
 *
 * @author John Grimes
 */
export default function VisualBuilder({
  expression,
  onChange,
}: VisualBuilderProps) {
  const { position: focusPosition, onFocus: setFocusPosition } =
    useContext(FocusContext);

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
