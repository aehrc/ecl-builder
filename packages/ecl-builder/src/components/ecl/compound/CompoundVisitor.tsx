/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import React, { ReactNode } from "react";
import { interleave } from "../../../array";
import {
  ConjunctionexpressionconstraintContext,
  DisjunctionexpressionconstraintContext,
  ExpressionconstraintContext,
  SubexpressionconstraintContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import { ExpressionVisitor, VisualExpressionType } from "../ExpressionVisitor";
import { focusHandler, isFocused } from "../FocusProvider";
import SubExpressionVisitor from "../sub/SubExpressionVisitor";
import LogicOperator from "./LogicOperator";
import LogicStatement, {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./LogicStatement";
import LogicStatementSubExpression from "./LogicStatementSubExpression";

/**
 * This component implements an ANTLR visitor specialised to the task of rendering compound
 * expressions.
 */
export default class CompoundVisitor extends BaseEclVisitor {
  visitExpressionconstraint(
    ctx: ExpressionconstraintContext
  ): VisualExpressionType {
    return new ExpressionVisitor(this.options).visit(ctx);
  }

  visitConjunctionexpressionconstraint(
    ctx: ConjunctionexpressionconstraintContext
  ): VisualExpressionType {
    return this.renderLogicStatement(ctx, ctx.conjunction(), "conjunction");
  }

  visitDisjunctionexpressionconstraint(
    ctx: DisjunctionexpressionconstraintContext
  ): VisualExpressionType {
    return this.renderLogicStatement(ctx, ctx.disjunction(), "disjunction");
  }

  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    return (
      <LogicStatementSubExpression
        onRemove={() =>
          this.transformer.removeAllSpans(this.options.removalContext, {
            focusUpdateStrategy: "BEFORE_UPDATE",
            collapseWhiteSpaceLeft: true,
          })
        }
      >
        {new SubExpressionVisitor(this.options).visit(ctx)}
      </LogicStatementSubExpression>
    );
  }

  visitConjunction(): VisualExpressionType {
    return <LogicOperator type="conjunction" />;
  }

  visitDisjunction(): VisualExpressionType {
    return <LogicOperator type="disjunction" />;
  }

  private renderLogicStatement(
    ctx:
      | ConjunctionexpressionconstraintContext
      | DisjunctionexpressionconstraintContext,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ): VisualExpressionType {
    let result: VisualExpressionType;

    if (ctx.subexpressionconstraint().length > 1) {
      // If there is more than one sub-expression in the statement, harvest the removal context
      // and then re-assemble the children.
      const children = interleave(ctx.subexpressionconstraint(), operatorCtx);
      result = [];
      for (let i = 0; i < children.length; i++) {
        const removalContext = this.transformer.getBinaryOperatorRemovalContext(
          children,
          i
        );
        result = (result as ReactNode[]).concat(
          new CompoundVisitor({
            ...this.options,
            removalContext,
          }).visit(children[i])
        );
      }
    } else {
      result = this.visitChildren(ctx);
    }

    return (
      <LogicStatement
        type={type}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChangeType={(type) =>
          this.transformer.applyUpdates(
            operatorCtx,
            logicStatementTypeToOperator[type]
          )
        }
        onAddCondition={(e) => this.transformer.append(ctx, e)}
        onFocus={focusHandler(ctx, this.options.onFocus)}
      >
        {result}
      </LogicStatement>
    );
  }
}
