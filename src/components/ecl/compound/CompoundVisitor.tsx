/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import { ParserRuleContext } from "antlr4";
import React from "react";
import {
  ConjunctionContext,
  ConjunctionexpressionconstraintContext,
  DisjunctionContext,
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
    return new SubExpressionVisitor(this.transformer).visit(ctx);
  }

  private visitLogicStatement(
    ctx: ConjunctionContext | DisjunctionContext,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ): VisualExpressionType {
    const children = this.visitChildren(ctx);
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
        {Array.isArray(children)
          ? children.map((child, i) => (
              <Stack
                className="logic-statement-sub-expression"
                key={i}
                direction="row"
              >
                {child}
              </Stack>
            ))
          : children}
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
}
