/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Done, Tune } from "@mui/icons-material";
import Stack from "@mui/material/Stack/Stack";
import React, { PropsWithChildren, useState } from "react";
import Actions from "../Actions";
import LogicOperator from "../compound/LogicOperator";
import LogicStatement, { LogicStatementType } from "../compound/LogicStatement";
import NeatRow from "../NeatRow";
import ConceptReference from "./ConceptReference";

export interface SubExpressionProps extends PropsWithChildren {
  // Set to true if the subexpression contains a constraint operator.
  constraint?: boolean;
  // Set to true if the subexpression contains a member of operator.
  memberOf?: boolean;
  // Called when a constraint operator is added to the expression.
  onAddConstraint: () => unknown;
  // Called when the constraint operator is removed.
  onRemoveConstraint: () => unknown;
  // Called when a member of operator is added to the expression.
  onAddMemberOf: () => unknown;
  // Called when the member of operator is removed.
  onRemoveMemberOf: () => unknown;
  // Called when a logical statement is added to the expression.
  onAddLogicStatement: (
    type: LogicStatementType,
    expression: string
  ) => unknown;
}

/**
 * A component for rendering a sub-expression, which is basically a concept plus constraints,
 * additions and refinements.
 *
 * @author John Grimes
 */
export default function SubExpression({
  constraint,
  memberOf,
  onAddConstraint,
  onRemoveConstraint,
  onAddMemberOf,
  onRemoveMemberOf,
  onAddLogicStatement,
  children,
}: SubExpressionProps) {
  const [addLogicStatement, setAddLogicStatement] =
    useState<LogicStatementType | null>(null);

  function handleClickHierarchy() {
    if (constraint) {
      onRemoveConstraint();
    } else {
      onAddConstraint();
    }
  }

  function handleClickReferenceSetMembers() {
    if (memberOf) {
      onRemoveMemberOf();
    } else {
      onAddMemberOf();
    }
  }

  function handleLogicStatementUpdate(expression: string) {
    if (addLogicStatement) {
      onAddLogicStatement(addLogicStatement, expression);
    } else {
      console.warn(
        "Attempt to update logic statement when no statement is selected"
      );
    }
  }

  function renderContent() {
    return (
      <Stack className="sub-expression" sx={{ flexGrow: 1 }}>
        <NeatRow className="sub-expression-content">
          {children}
          <Actions
            actions={[
              {
                type: "heading",
                label: "Include:",
              },
              {
                type: "item",
                label: "Hierarchy",
                onClick: handleClickHierarchy,
                icon: constraint ? <Done /> : null,
              },
              {
                type: "item",
                label: "Reference set members",
                onClick: handleClickReferenceSetMembers,
                icon: memberOf ? <Done /> : null,
              },
              {
                type: "item",
                label: "Replaced concepts",
              },
              {
                type: "heading",
                label: "Filter on:",
              },
              {
                type: "item",
                label: "Attributes",
              },
              {
                type: "item",
                label: "Descriptions",
              },
              {
                type: "item",
                label: "Definition status",
              },
              {
                type: "item",
                label: "Module",
              },
              {
                type: "item",
                label: "Effective time",
              },
              {
                type: "item",
                label: "Active status",
              },
              {
                type: "item",
                label: "Reference set attributes",
              },
              {
                type: "heading",
                label: "Add logic statement:",
              },
              {
                type: "item",
                label: "AND condition",
                onClick: () => setAddLogicStatement("conjunction"),
              },
              {
                type: "item",
                label: "OR condition",
                onClick: () => setAddLogicStatement("disjunction"),
              },
            ]}
            icon={Tune}
          />
        </NeatRow>
      </Stack>
    );
  }

  return addLogicStatement ? (
    <LogicStatement
      type={addLogicStatement}
      onChangeType={(type) => setAddLogicStatement(type)}
      onAddCondition={handleLogicStatementUpdate}
    >
      <Stack className="logic-statement-sub-expression" direction="row">
        {renderContent()}
      </Stack>
      <LogicOperator type={addLogicStatement} />
      <ConceptReference onChange={handleLogicStatementUpdate} />
    </LogicStatement>
  ) : (
    renderContent()
  );
}
