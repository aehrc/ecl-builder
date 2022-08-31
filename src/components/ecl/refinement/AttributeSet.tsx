/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { DEFAULT_REFINEMENT } from "../../../constants";
import Actions, { ActionItem } from "../Actions";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "../compound/LogicStatement";
import ExpressionGrouping from "../ExpressionGrouping";
import NeatRow from "../NeatRow";

export interface AttributeSetProps extends PropsWithChildren {
  type: LogicStatementType;
  hideAddGroup?: boolean;
  onChangeType: (type: LogicStatementType) => unknown;
  onAddAttribute: (expression: string) => unknown;
}

export default function AttributeSet({
  type,
  hideAddGroup,
  onChangeType,
  onAddAttribute,
  children,
}: AttributeSetProps) {
  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  function handleAddAttribute() {
    onAddAttribute(
      `${logicStatementTypeToOperator[type]}${DEFAULT_REFINEMENT}`
    );
  }

  function handleAddAttributeGroup() {
    onAddAttribute(
      `${logicStatementTypeToOperator[type]}{ ${DEFAULT_REFINEMENT} }`
    );
  }

  function renderHeading() {
    const addAttributeGroup: ActionItem = {
      type: "item",
      label: "Add attribute group",
      onClick: handleAddAttributeGroup,
    };
    return (
      <NeatRow className="attribute-set-heading">
        <Select
          value={type}
          onChange={handleSelectType}
          sx={{ backgroundColor: "background.default" }}
        >
          <MenuItem value="conjunction">with all of these attributes</MenuItem>
          <MenuItem value="disjunction">with any of these attributes</MenuItem>
        </Select>
        <Actions
          actions={[
            {
              type: "item",
              label: "Add attribute",
              onClick: handleAddAttribute,
            },
            ...(hideAddGroup ? [] : [addAttributeGroup]),
          ]}
          icon={Add}
        />
      </NeatRow>
    );
  }

  return (
    <ExpressionGrouping
      className={`${type}-attribute-set`}
      heading={renderHeading()}
    >
      {children}
    </ExpressionGrouping>
  );
}
