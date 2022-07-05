/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import ConceptReference from "./ConceptReference";
import ExpressionGrouping from "./ExpressionGrouping";
import { ChangeHandler } from "./ExpressionVisitor";
import LogicOperator from "./LogicOperator";

export type LogicStatementType = "conjunction" | "disjunction";

export interface LogicStatementProps extends PropsWithChildren {
  type: LogicStatementType;
  showAddButton?: boolean;
  onChangeType: (type: LogicStatementType) => unknown;
  onAddCondition: ChangeHandler;
}

export const logicStatementTypeToOperator: Record<LogicStatementType, string> =
  {
    // These have a space after them due to the "mws" in the parser rule.
    conjunction: "AND ",
    disjunction: "OR ",
  };

/**
 * A component for rendering a logic statement, i.e. a conjunction or a disjunction.
 *
 * @author John Grimes
 */
export default function LogicStatement({
  type,
  showAddButton = true,
  onChangeType,
  onAddCondition,
  children,
}: LogicStatementProps) {
  const [addCondition, setAddCondition] = useState(false);

  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  function handleAddCondition(expression: string) {
    onAddCondition(logicStatementTypeToOperator[type] + expression);
    setAddCondition(false);
  }

  return (
    <ExpressionGrouping
      className="logic-statement"
      actions={[
        {
          type: "item",
          label: "Add condition",
          onClick: () => setAddCondition(true),
        },
      ]}
      showAddButton={showAddButton && !addCondition}
      sx={{
        mt: "1.8em",
        pt: "3em",
      }}
    >
      <Stack direction="row" sx={{ position: "absolute", top: "-1.8em" }}>
        <Select
          value={type}
          onChange={handleSelectType}
          sx={{ backgroundColor: "background.default" }}
        >
          <MenuItem value="conjunction">
            matching all of these conditions
          </MenuItem>
          <MenuItem value="disjunction">
            matching any of these conditions
          </MenuItem>
        </Select>
      </Stack>
      {addCondition ? (
        <>
          {children}
          <LogicOperator type={type} />
          <ConceptReference onChange={handleAddCondition} />
        </>
      ) : (
        children
      )}
    </ExpressionGrouping>
  );
}
