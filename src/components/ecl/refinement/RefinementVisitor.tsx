/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import React, { ReactNode } from "react";
import { interleave } from "../../../array";
import { ATTRIBUTE_VALUE_SET_URI } from "../../../constants";
import {
  ConjunctionContext,
  DisjunctionContext,
  EclattributeContext,
  EclattributenameContext,
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
import ConceptSearchScope from "../sub/ConceptSearchScope";
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
    const visitor = new RefinementVisitor({
      transformer: this.transformer,
      removalContext: [
        this.transformer.spanFromTerminalNode(ctx.COLON()),
        this.transformer.spanFromContext(ctx.eclrefinement()),
      ],
    });
    return (
      <RefinedExpression
        subExpression={visitor.visit(ctx.subexpressionconstraint())}
      >
        {visitor.visit(ctx.eclrefinement())}
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
    return new SubExpressionVisitor({
      transformer: this.transformer,
      removalContext: this.removalContext,
      refinement: true,
    }).visit(ctx);
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
    let result: VisualExpressionType;
    const logicalAttributeSet =
      ctx.conjunctionattributeset() ?? ctx.disjunctionattributeset();
    const subAttributeSets = [
      ctx.subattributeset(),
      ...(logicalAttributeSet?.subattributeset() ?? []),
    ];
    if (subAttributeSets.length > 1) {
      const children = interleave(subAttributeSets, operatorCtx);
      result = [];
      for (let i = 0; i < children.length; i++) {
        const removalContext = this.transformer.getBinaryOperatorRemovalContext(
          children,
          i
        );
        result = (result as ReactNode[]).concat(
          new RefinementVisitor({
            transformer: this.transformer,
            removalContext,
          }).visit(children[i])
        );
      }
    } else {
      result = this.visitChildren(ctx);
    }
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
        {result}
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
    return (
      <Attribute
        onRemove={() => this.transformer.removeAllSpans(this.removalContext)}
      >
        {this.visitChildren(ctx)}
      </Attribute>
    );
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

  /**
   * eclattributename : subexpressionconstraint;
   */
  visitEclattributename(ctx: EclattributenameContext): VisualExpressionType {
    return (
      <ConceptSearchScope.Provider
        value={{
          valueSet: ATTRIBUTE_VALUE_SET_URI,
          label: "Search for an attribute",
        }}
      >
        {this.visitChildren(ctx)}
      </ConceptSearchScope.Provider>
    );
  }
}