/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add, Done } from "@mui/icons-material";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { Children, PropsWithChildren, useRef } from "react";
import { DEFAULT_REFINEMENT } from "../../../constants";
import Actions, { Action, ActionItem } from "../Actions";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "../compound/LogicStatement";
import ExpressionGrouping from "../ExpressionGrouping";
import { ChangeHandlerWithPosition } from "../ExpressionVisitor";
import NeatRow from "../NeatRow";
import RemoveExpression from "../RemoveExpression";

export interface AttributeSetProps extends PropsWithChildren {
  type: LogicStatementType;
  hideAddGroup?: boolean;
  onChangeType: (type: LogicStatementType) => unknown;
  onAddAttribute: ChangeHandlerWithPosition;
  onRemove?: () => unknown;
  heading?: React.ReactNode;
  cardinality?: boolean;
  onAddCardinality?: () => unknown;
  onRemoveCardinality?: () => unknown;
}

export default function AttributeSet(props: AttributeSetProps) {
  const { type, onRemove, children } = props;

  return (
    <RemoveExpression
      enabled={!!onRemove}
      tooltip="Remove this set of attributes"
      onClick={onRemove}
      buttonSx={{ top: "4px" }}
    >
      <ExpressionGrouping
        className={`${type}-attribute-set`}
        heading={<Heading {...props} />}
      >
        {children}
      </ExpressionGrouping>
    </RemoveExpression>
  );
}

function Heading({
  type,
  hideAddGroup,
  onChangeType,
  onAddAttribute,
  heading,
  cardinality,
  onAddCardinality,
  onRemoveCardinality,
}: AttributeSetProps) {
  useRef(null);
  const addAttributeGroup: ActionItem = {
    type: "item",
    label: "Add attribute group",
    onClick: handleAddAttributeGroup,
  };
  const addCardinality: Action[] = [
    {
      type: "heading",
      label: "Toggle:",
    },
    {
      type: "item",
      label: "Cardinality",
      onClick: handleClickCardinality,
      icon: cardinality ? <Done /> : null,
    },
  ];

  function handleSelectType(event: SelectChangeEvent<LogicStatementType>) {
    onChangeType(event.target.value as LogicStatementType);
  }

  function handleAddAttribute() {
    const operator = logicStatementTypeToOperator[type];
    onAddAttribute(operator + DEFAULT_REFINEMENT, operator.length);
  }

  function handleAddAttributeGroup() {
    const operator = logicStatementTypeToOperator[type];
    onAddAttribute(`${operator}{ ${DEFAULT_REFINEMENT} }`, operator.length + 2);
  }

  function handleClickCardinality() {
    if (cardinality && onRemoveCardinality) {
      onRemoveCardinality();
    } else if (onAddCardinality) {
      onAddCardinality();
    }
  }

  return (
    <NeatRow
      className="attribute-set-heading"
      disableActionsHide
      sx={{
        "& > .neat-row": {
          p: 0,
          "& > *": {
            borderRadius: "0 !important",
          },
        },
      }}
    >
      {Children.toArray(heading)}
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
          ...(!onAddCardinality ? [] : addCardinality),
        ]}
        icon={Add}
        title={"Add attribute" + (onAddCardinality ? " or cardinality" : "")}
      />
    </NeatRow>
  );
}
