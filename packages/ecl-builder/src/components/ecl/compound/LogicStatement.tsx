/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import Actions from "../Actions";
import ExpressionGrouping from "../ExpressionGrouping";
import { ChangeHandler, FocusManagementProps } from "../ExpressionVisitor";
import { useFocus } from "../FocusProvider";
import NeatRow from "../NeatRow";
import ConceptReference from "../sub/ConceptReference";
import LogicOperator from "./LogicOperator";

// The type of logic statement, either "conjunction" or "disjunction".
export type LogicStatementType = "conjunction" | "disjunction";

export interface LogicStatementProps
  extends FocusManagementProps,
    PropsWithChildren {
  // The type of logic statement, either "conjunction" or "disjunction".
  type: LogicStatementType;
  // Invoked when the user changes the type of logic statement.
  onChangeType: (type: LogicStatementType) => unknown;
  // Invoked when the user adds a new conjunction or disjunction to the statement.
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
  focus,
  onChangeType,
  onAddCondition,
  onFocus,
  children,
}: LogicStatementProps) {
  const [addCondition, setAddCondition] = useState(false),
    focusRef = useFocus(focus);

  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  function handleAddCondition(expression: string) {
    onAddCondition(logicStatementTypeToOperator[type] + expression);
    setAddCondition(false);
  }

  function renderHeading() {
    return (
      <NeatRow className="logic-statement-heading">
        <Select
          inputRef={focusRef}
          value={type}
          onChange={handleSelectType}
          onFocus={onFocus}
          sx={{ backgroundColor: "background.default", border: 0 }}
        >
          <MenuItem value="conjunction">
            matching all of these conditions
          </MenuItem>
          <MenuItem value="disjunction">
            matching any of these conditions
          </MenuItem>
        </Select>
        <Actions
          actions={[
            {
              type: "item",
              label: "Add condition",
              onClick: () => setAddCondition(true),
            },
          ]}
          icon={Add}
        />
      </NeatRow>
    );
  }

  return (
    <ExpressionGrouping className="logic-statement" heading={renderHeading()}>
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
