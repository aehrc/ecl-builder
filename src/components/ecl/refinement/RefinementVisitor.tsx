/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import React from "react";
import {
  ConjunctionContext,
  DisjunctionContext,
  EclattributeContext,
  EclattributesetContext,
  ExpressioncomparisonoperatorContext,
  RefinedexpressionconstraintContext,
  SubexpressionconstraintContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import CompoundVisitor from "../compound/CompoundVisitor";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "../compound/LogicStatement";
import { VisualExpressionType } from "../ExpressionVisitor";
import SubExpressionVisitor from "../sub/SubExpressionVisitor";
import Attribute from "./Attribute";
import AttributeSet from "./AttributeSet";
import ComparisonOperator from "./ComparisonOperator";
import RefinedExpression from "./RefinedExpression";

export default class RefinementVisitor extends BaseEclVisitor {
  /**
   * refinedexpressionconstraint : subexpressionconstraint ws COLON ws eclrefinement;
   */
  visitRefinedexpressionconstraint(
    ctx: RefinedexpressionconstraintContext
  ): VisualExpressionType {
    return (
      <RefinedExpression
        subExpression={this.visit(ctx.subexpressionconstraint())}
      >
        {this.visit(ctx.eclrefinement())}
      </RefinedExpression>
    );
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
    return new SubExpressionVisitor({ transformer: this.transformer }).visit(
      ctx
    );
  }

  /**
   * eclattributeset : subattributeset ws (conjunctionattributeset | disjunctionattributeset)?;
   */
  visitEclattributeset(ctx: EclattributesetContext): VisualExpressionType {
    const conjunctionAttributeSet = ctx.conjunctionattributeset(),
      disjunctionAttributeSet = ctx.disjunctionattributeset();
    if (disjunctionAttributeSet) {
      return this.visitAttributeSet(
        ctx,
        disjunctionAttributeSet.disjunction(),
        "disjunction"
      );
    } else {
      return this.visitAttributeSet(
        ctx,
        conjunctionAttributeSet?.conjunction() ?? [],
        "conjunction"
      );
    }
  }

  /**
   * eclattributeset : subattributeset ws (conjunctionattributeset | disjunctionattributeset)?;
   */
  visitAttributeSet(
    ctx: EclattributesetContext,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ): VisualExpressionType {
    return (
      <AttributeSet
        type={type}
        onChangeType={(type) =>
          this.transformer.applyUpdates(
            operatorCtx,
            logicStatementTypeToOperator[type]
          )
        }
        onAddAttribute={(expression) =>
          this.transformer.append(ctx, expression)
        }
      >
        {this.visitChildren(ctx)}
      </AttributeSet>
    );
  }

  /**
   * eclattribute : (LEFT_BRACE cardinality RIGHT_BRACE ws)? (reverseflag ws)? eclattributename ws
   * ((expressioncomparisonoperator ws subexpressionconstraint) | (numericcomparisonoperator ws HASH
   * numericvalue) | (stringcomparisonoperator ws (typedsearchterm | typedsearchtermset)) |
   * (booleancomparisonoperator ws booleanvalue));
   */
  visitEclattribute(ctx: EclattributeContext): VisualExpressionType {
    return <Attribute>{this.visitChildren(ctx)}</Attribute>;
  }

  /**
   * expressioncomparisonoperator : EQUALS | (EXCLAMATION EQUALS);
   */
  visitExpressioncomparisonoperator(
    ctx: ExpressioncomparisonoperatorContext
  ): VisualExpressionType {
    return (
      <ComparisonOperator
        type={ctx.EXCLAMATION() ? "!=" : "="}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  /**
   * conjunction : (((CAP_A | A)|(CAP_A | A)) ((CAP_N | N)|(CAP_N | N)) ((CAP_D | D)|(CAP_D | D))
   *  mws) | COMMA;
   */
  visitConjunction(ctx: ConjunctionContext): VisualExpressionType {
    return new CompoundVisitor({ transformer: this.transformer }).visit(ctx);
  }

  /**
   * disjunction : ((CAP_O | O)|(CAP_O | O)) ((CAP_R | R)|(CAP_R | R)) mws;
   */
  visitDisjunction(ctx: DisjunctionContext): VisualExpressionType {
    return new CompoundVisitor({ transformer: this.transformer }).visit(ctx);
  }
}
