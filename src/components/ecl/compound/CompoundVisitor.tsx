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
  SubexpressionconstraintContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import { VisualExpressionType } from "../ExpressionVisitor";
import SubExpressionVisitor from "../sub/SubExpressionVisitor";
import LogicOperator from "./LogicOperator";
import LogicStatement, {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./LogicStatement";
import LogicStatementSubExpression from "./LogicStatementSubExpression";

export default class CompoundVisitor extends BaseEclVisitor {
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
        onRemove={() => this.transformer.removeAllSpans(this.removalContext)}
      >
        {new SubExpressionVisitor({ transformer: this.transformer }).visit(ctx)}
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
      const children = interleave(ctx.subexpressionconstraint(), operatorCtx);
      result = [];
      for (let i = 0; i < children.length; i++) {
        const removalContext = this.transformer.getBinaryOperatorRemovalContext(
          children,
          i
        );
        result = (result as ReactNode[]).concat(
          new CompoundVisitor({
            transformer: this.transformer,
            removalContext,
          }).visit(children[i])
        );
      }
    } else {
      result = this.visitChildren(ctx);
    }
    return (
      <LogicStatement
        onChangeType={(type) =>
          this.transformer.applyUpdates(
            operatorCtx,
            logicStatementTypeToOperator[type]
          )
        }
        onAddCondition={(e) => this.transformer.append(ctx, e)}
        type={type}
      >
        {result}
      </LogicStatement>
    );
  }
}
