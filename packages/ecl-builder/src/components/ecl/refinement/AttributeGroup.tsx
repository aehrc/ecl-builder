/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { DEFAULT_REFINEMENT } from "../../../constants";
import Actions from "../Actions";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "../compound/LogicStatement";
import ExpressionGrouping from "../ExpressionGrouping";
import { ChangeHandlerWithPosition } from "../ExpressionVisitor";
import NeatRow from "../NeatRow";

export interface AttributeGroupProps extends PropsWithChildren {
  type: LogicStatementType;
  onChangeType: (type: LogicStatementType) => unknown;
  onAddAttribute: ChangeHandlerWithPosition;
}

export default function AttributeGroup({
  type,
  onChangeType,
  onAddAttribute,
  children,
}: AttributeGroupProps) {
  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  function handleAddAttributeGroup() {
    const operator = logicStatementTypeToOperator[type];
    onAddAttribute(`${operator}{ ${DEFAULT_REFINEMENT} }`, operator.length + 2);
  }

  function renderHeading() {
    return (
      <NeatRow className="attribute-group-heading">
        <Select
          value={type}
          onChange={handleSelectType}
          sx={{ backgroundColor: "background.default" }}
        >
          <MenuItem value="conjunction">
            with all of these attribute groups
          </MenuItem>
          <MenuItem value="disjunction">
            with any of these attribute groups
          </MenuItem>
        </Select>
        <Actions
          actions={[
            {
              type: "item",
              label: "Add attribute group",
              onClick: handleAddAttributeGroup,
            },
          ]}
          icon={Add}
        />
      </NeatRow>
    );
  }

  return (
    <ExpressionGrouping
      className={`${type}-attribute-group`}
      heading={renderHeading()}
    >
      {children}
    </ExpressionGrouping>
  );
}
