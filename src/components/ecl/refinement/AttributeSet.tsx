/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Actions from "../Actions";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "../compound/LogicStatement";
import ExpressionGrouping from "../ExpressionGrouping";
import NeatRow from "../NeatRow";

export interface AttributeSetProps extends PropsWithChildren {
  type: LogicStatementType;
  onChangeType: (type: LogicStatementType) => unknown;
  onAddAttribute: (expression: string) => unknown;
}

export default function AttributeSet({
  type,
  onChangeType,
  onAddAttribute,
  children,
}: AttributeSetProps) {
  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  function handleAddAttribute() {
    onAddAttribute(
      `${logicStatementTypeToOperator[type]} 47429007 |associated with| = 138875005 |SNOMED CT Concept|`
    );
  }

  function renderHeading() {
    return (
      <NeatRow className="refinement-heading">
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
      sx={{ mt: "2.8em" }}
    >
      {children}
    </ExpressionGrouping>
  );
}
