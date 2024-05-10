/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import { ButtonGroup, MenuItem, Select, SelectChangeEvent, useTheme } from "@mui/material";
import React, { Children, PropsWithChildren } from "react";
import { grey } from "../../../themes/color";
import { DEFAULT_CONCEPT } from "../../../constants";
import Actions from "../Actions";
import ExpressionGrouping from "../ExpressionGrouping";
import {
  ChangeHandlerWithPosition,
  FocusManagementProps,
} from "../ExpressionVisitor";
import { useFocus } from "../FocusProvider";
import NeatRow from "../NeatRow";
import { SubExpressionProps, useSubExpression } from "../sub/SubExpression";

// The type of logic statement, either "conjunction" or "disjunction" or "exclusion"
export type LogicStatementType = "conjunction" | "disjunction" | "exclusion";

export interface LogicStatementProps
  extends FocusManagementProps,
    PropsWithChildren,
    SubExpressionProps {
  // The type of logic statement, either "conjunction" or "disjunction".
  type: LogicStatementType;
  // Invoked when the user changes the type of logic statement.
  onChangeType: (type: LogicStatementType) => unknown;
  // Invoked when the user adds a new conjunction or disjunction to the statement.
  onAddCondition: ChangeHandlerWithPosition;
  // Number of subexpressions in statement
  nSubexpressions: number;
  // Components to render within the heading of the expression grouping.
  heading?: React.ReactNode;
}

export const logicStatementTypeToOperator: Record<LogicStatementType, string> =
  {
    // These have a space after them due to the "mws" in the parser rule.
    conjunction: "AND ",
    disjunction: "OR ",
    exclusion: "MINUS ",
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
  children,
  nSubexpressions,
  heading,
  ...subexpressionProps
}: LogicStatementProps) {
  const theme = useTheme();
  const focusRef = useFocus(focus);

  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  function handleAddCondition() {
    const operator = logicStatementTypeToOperator[type];
    onAddCondition(operator + DEFAULT_CONCEPT, operator.length);
  }

  const { SubExpressionActions } = useSubExpression(subexpressionProps);

  function renderHeading() {
    return (
      <NeatRow className="logic-statement-heading">
        {Children.toArray(heading)}
        <Select
          inputRef={focusRef}
          value={type}
          onChange={handleSelectType}
          sx={{ backgroundColor: "background.default", border: 0 }}
        >
          <MenuItem value="conjunction">
            matching all of these conditions
          </MenuItem>
          <MenuItem value="disjunction">
            matching any of these conditions
          </MenuItem>
          {nSubexpressions < 3 ? (
            <MenuItem value="exclusion">
              matching the first but not the second condition
            </MenuItem>
          ) : null}
        </Select>
        <ButtonGroup 
          className="actions" 
          sx={{
            "& > *": {
              height: '100%', 
              "&:not(:last-child)": {
                borderRightColor: grey(theme, 4), 
                borderRightWidth: 1, 
                borderRightStyle: "solid"
              }
            },
          }}
        >
          {type !== "exclusion" ? (
            <Actions
              actions={[
                {
                  type: "item",
                  label: "Add condition",
                  onClick: handleAddCondition,
                },
              ]}
              icon={Add}
              title="Add condition"
            />
          ) : null}
          <SubExpressionActions key="actions" />
        </ButtonGroup>
      </NeatRow>
    );
  }

  return (
    <ExpressionGrouping className="logic-statement" heading={renderHeading()}>
      {children}
    </ExpressionGrouping>
  );
}
