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
  /**
   * conjunctionexpressionconstraint : subexpressionconstraint (ws conjunction ws
   * subexpressionconstraint)+;
   */
  visitConjunctionexpressionconstraint(
    ctx: ConjunctionexpressionconstraintContext
  ): VisualExpressionType {
    return this.visitLogicStatement(ctx, ctx.conjunction(), "conjunction");
  }

  /**
   * disjunctionexpressionconstraint : subexpressionconstraint (ws disjunction ws
   * subexpressionconstraint)+;
   */
  visitDisjunctionexpressionconstraint(
    ctx: DisjunctionexpressionconstraintContext
  ): VisualExpressionType {
    return this.visitLogicStatement(ctx, ctx.disjunction(), "disjunction");
  }

  /**
   * subexpressionconstraint: (constraintoperator ws)? ( ( (memberof ws)? (eclfocusconcept |
   * (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) (ws memberfilterconstraint)*) |
   * (eclfocusconcept | (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) ) (ws
   * (descriptionfilterconstraint | conceptfilterconstraint))* (ws historysupplement)?;
   */
  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    return (
      <LogicStatementSubExpression
        onRemove={() => this.transformer.removeAll(this.removalContext)}
      >
        {new SubExpressionVisitor({ transformer: this.transformer }).visit(ctx)}
      </LogicStatementSubExpression>
    );
  }

  private visitLogicStatement(
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
        const removalContext = this.getLogicStatementRemovalContext(
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

  /**
   * conjunction : (((CAP_A | A)|(CAP_A | A)) ((CAP_N | N)|(CAP_N | N)) ((CAP_D | D)|(CAP_D | D))
   *  mws) | COMMA;
   */
  visitConjunction(): VisualExpressionType {
    return <LogicOperator type="conjunction" />;
  }

  /**
   * disjunction : ((CAP_O | O)|(CAP_O | O)) ((CAP_R | R)|(CAP_R | R)) mws;
   */
  visitDisjunction(): VisualExpressionType {
    return <LogicOperator type="disjunction" />;
  }

  private getLogicStatementRemovalContext(
    ctxs: ParserRuleContext[],
    subjectIndex: number
  ) {
    const removalContext: ParserRuleContext[] = [];
    for (let currentIndex = 0; currentIndex < ctxs.length; currentIndex++) {
      if (subjectIndex === currentIndex) {
        // Always include the subject context itself in the removal context.
        removalContext.push(ctxs[currentIndex]);
      } else if (
        subjectIndex === ctxs.length - 1 &&
        (subjectIndex + 1) % 2 === 1 &&
        currentIndex === subjectIndex - 1
      ) {
        // If this is a subject context that is the last child, include the previous logical
        // operator in the removal context.
        removalContext.push(ctxs[currentIndex]);
      } else if (
        (subjectIndex + 1) % 2 === 1 &&
        currentIndex === subjectIndex + 1
      ) {
        // If this is a subject context, include the next logical operator in the removal
        // context.
        removalContext.push(ctxs[currentIndex]);
      }
    }
    return removalContext;
  }
}
