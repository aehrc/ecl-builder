/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import LogicOperator from "./compound/LogicOperator";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./compound/LogicStatement";
import { ChangeReporterProps } from "./ExpressionVisitor";
import ConceptReference from "./sub/ConceptReference";

export interface AddConditionProps
  extends PropsWithChildren,
    ChangeReporterProps {
  logicStatementType?: LogicStatementType;
}

/**
 * A component that allows the user to add a new condition to the expression.
 *
 * @author John Grimes
 */
export default function AddCondition({
  logicStatementType = "conjunction",
  onChange,
  children,
}: AddConditionProps) {
  const [addMode, setAddMode] = useState(false);

  function handleChange(expression: string) {
    // Send back an expression that can be appended to the current expression.
    onChange(logicStatementTypeToOperator[logicStatementType] + expression);
    setAddMode(false);
  }

  return (
    <Stack className="add-condition" spacing={2} flexGrow={1}>
      {children}
      {addMode ? (
        <>
          <LogicOperator type={logicStatementType} />
          <ConceptReference onChange={handleChange} />
        </>
      ) : (
        <Button
          startIcon={<Add />}
          onClick={() => setAddMode(true)}
          sx={{ alignSelf: "flex-start" }}
        >
          Add condition
        </Button>
      )}
    </Stack>
  );
}
