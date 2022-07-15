/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Done } from "@mui/icons-material";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import React, {
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import ConceptReference from "./ConceptReference";
import ExpressionGrouping from "./ExpressionGrouping";
import LogicOperator from "./LogicOperator";
import LogicStatement, { LogicStatementType } from "./LogicStatement";
import RenderingContext from "./RenderingContext";

export interface SubExpressionProps extends PropsWithChildren {
  // The currently selected constraint type.
  constraint?: any;
  // Additional content that is related to the sub-expression.
  relatedContent?: ReactNode;
  // Called when a new constraint operator is added to the expression.
  onAddConstraint: () => unknown;
  // Called when the constraint operator is removed.
  onRemoveConstraint: () => unknown;
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
  relatedContent,
  onAddConstraint,
  onRemoveConstraint,
  onAddLogicStatement,
  children,
}: SubExpressionProps) {
  const { insideEclAttribute } = useContext(RenderingContext),
    [addLogicStatement, setAddLogicStatement] =
      useState<LogicStatementType | null>(null);

  function handleClickHierarchy() {
    if (constraint) {
      onRemoveConstraint();
    } else {
      onAddConstraint();
    }
  }

  function handleClickAddAnd() {
    setAddLogicStatement("conjunction");
  }

  function handleClickAddOr() {
    setAddLogicStatement("disjunction");
  }

  function handleLogicStatementUpdate(expression: string) {
    onAddLogicStatement(addLogicStatement!, expression);
  }

  function renderContent() {
    return (
      <Stack>
        <Stack
          direction="row"
          alignItems="flex-start"
          alignSelf="stretch"
          flexGrow={1}
        >
          {children}
        </Stack>
        {relatedContent}
      </Stack>
    );
  }

  function GroupingWrapper({ children }: PropsWithChildren) {
    return (
      <ExpressionGrouping
        className="sub-expression"
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
      >
        {children}
      </ExpressionGrouping>
    );
  }

  return addLogicStatement ? (
    <LogicStatement
      type={addLogicStatement}
      showActions={false}
      onChangeType={(type) => setAddLogicStatement(type)}
      onAddCondition={handleLogicStatementUpdate}
    >
      {renderContent()}
      <LogicOperator type={addLogicStatement} />
      <ConceptReference onChange={handleLogicStatementUpdate} />
    </LogicStatement>
  ) : insideEclAttribute ? (
    <Box flexGrow={1}>{renderContent()}</Box>
  ) : (
    <GroupingWrapper>{renderContent()}</GroupingWrapper>
  );
}
