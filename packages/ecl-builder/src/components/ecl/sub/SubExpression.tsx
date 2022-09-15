/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Done, Tune } from "@mui/icons-material";
import Stack from "@mui/material/Stack/Stack";
import React, { PropsWithChildren, useState } from "react";
import { DEFAULT_REFINEMENT } from "../../../constants";
import Actions, { Action } from "../Actions";
import BlankLogicStatement from "../compound/BlankLogicStatement";
import { LogicStatementType } from "../compound/LogicStatement";
import NeatRow from "../NeatRow";

export interface SubExpressionProps extends PropsWithChildren {
  // Set to true if the sub-expression contains a constraint operator.
  constraint?: boolean;
  // Set to true if the sub-expression contains a member of operator.
  memberOf?: boolean;
  // Set to true if the sub-expression contains a refinement.
  refinement?: boolean;
  // Used to hide actions, e.g. when rendering a blank sub-expression.
  hideActions?: boolean;
  // Contains the children relating to a nested expression, if present.
  nestedExpression?: React.ReactNode;
  // Called when a constraint operator is added to the expression.
  onAddConstraint?: () => unknown;
  // Called when the constraint operator is removed.
  onRemoveConstraint?: () => unknown;
  // Called when a member of operator is added to the expression.
  onAddMemberOf?: () => unknown;
  // Called when the member of operator is removed.
  onRemoveMemberOf?: () => unknown;
  // Called when the refinement is removed.
  onRemoveRefinement?: () => unknown;
  // Called when a logical statement is added to the expression.
  onAddLogicStatement?: (
    type: LogicStatementType,
    expression: string
  ) => unknown;
  // Called when an attribute refinement is added to the expression.
  onAddRefinement?: (expression: string) => unknown;
}

/**
 * Common functionality shared by various incarnations of sub-expression.
 */
export function useSubExpression({
  constraint,
  memberOf,
  refinement,
  hideActions,
  onAddConstraint,
  onRemoveConstraint,
  onAddMemberOf,
  onRemoveMemberOf,
  onRemoveRefinement,
  onAddLogicStatement,
  onAddRefinement,
}: SubExpressionProps) {
  const [addLogicStatement, setAddLogicStatement] =
      useState<LogicStatementType | null>(null),
    actions: Action[] = [
      {
        type: "heading",
        label: "Toggle:",
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
        disabled: true,
      },
      {
        type: "heading",
        label: "Filter on:",
      },
      {
        type: "item",
        label: "Attributes",
        onClick: handleAddRefinement,
        icon: refinement ? <Done /> : null,
      },
      {
        type: "item",
        label: "Descriptions",
        disabled: true,
      },
      {
        type: "item",
        label: "Definition status",
        disabled: true,
      },
      {
        type: "item",
        label: "Module",
        disabled: true,
      },
      {
        type: "item",
        label: "Effective time",
        disabled: true,
      },
      {
        type: "item",
        label: "Active status",
        disabled: true,
      },
      {
        type: "item",
        label: "Reference set attributes",
        disabled: true,
      },
      {
        type: "heading",
        label: "Add:",
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
    ];

  function handleClickHierarchy() {
    if (constraint && onRemoveConstraint) {
      onRemoveConstraint();
    } else if (onAddConstraint) {
      onAddConstraint();
    }
  }

  function handleClickReferenceSetMembers() {
    if (memberOf && onRemoveMemberOf) {
      onRemoveMemberOf();
    } else if (onAddMemberOf) {
      onAddMemberOf();
    }
  }

  function handleLogicStatementUpdate(expression: string) {
    if (addLogicStatement && onAddLogicStatement) {
      onAddLogicStatement(addLogicStatement, expression);
    } else {
      console.warn(
        "Attempt to update logic statement when no statement is selected"
      );
    }
  }

  function handleAddRefinement() {
    if (refinement && onRemoveRefinement) {
      onRemoveRefinement();
    } else if (onAddRefinement) {
      onAddRefinement(DEFAULT_REFINEMENT);
    }
  }

  function AddLogicStatement({ children }: PropsWithChildren) {
    return addLogicStatement ? (
      <BlankLogicStatement
        type={addLogicStatement}
        onChangeType={setAddLogicStatement}
        onSave={(_, e) => handleLogicStatementUpdate(e)}
      >
        {children}
      </BlankLogicStatement>
    ) : (
      <>{children}</>
    );
  }

  function SubExpressionActions() {
    return hideActions ? null : <Actions actions={actions} icon={Tune} />;
  }

  return {
    AddLogicStatement,
    SubExpressionActions,
  };
}

/**
 * A component for rendering a sub-expression, which is basically a concept plus constraints,
 * additions and refinements.
 *
 * @author John Grimes
 */
export default function SubExpression(props: SubExpressionProps) {
  const { AddLogicStatement, SubExpressionActions } = useSubExpression(props);

  return (
    <AddLogicStatement>
      <Stack className="sub-expression" sx={{ flexGrow: 1 }}>
        <NeatRow className="sub-expression-content">
          {props.children}
          <SubExpressionActions />
        </NeatRow>
      </Stack>
    </AddLogicStatement>
  );
}
