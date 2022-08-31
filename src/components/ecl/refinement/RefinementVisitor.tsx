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
  EclrefinementContext,
  ExpressioncomparisonoperatorContext,
  RefinedexpressionconstraintContext,
  SubexpressionconstraintContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor, { BaseEclVisitorOptions } from "../BaseEclVisitor";
import CompoundVisitor from "../compound/CompoundVisitor";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "../compound/LogicStatement";
import { VisualExpressionType } from "../ExpressionVisitor";
import ConceptSearchScope from "../sub/ConceptSearchScope";
import SubExpressionVisitor from "../sub/SubExpressionVisitor";
import Attribute from "./Attribute";
import AttributeGroup from "./AttributeGroup";
import AttributeSet from "./AttributeSet";
import ComparisonOperator from "./ComparisonOperator";
import RefinedExpression from "./RefinedExpression";

export interface RefinementVisitorOptions extends BaseEclVisitorOptions {
  attributeGrouping?: boolean;
}

export default class RefinementVisitor extends BaseEclVisitor {
  private readonly attributeGrouping: boolean;

  constructor(options: RefinementVisitorOptions) {
    super(options);
    this.attributeGrouping = options.attributeGrouping ?? false;
  }

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

  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    return new SubExpressionVisitor({
      transformer: this.transformer,
      removalContext: this.removalContext,
      refinement: true,
    }).visit(ctx);
  }

  visitConjunction(ctx: ConjunctionContext): VisualExpressionType {
    return new CompoundVisitor({ transformer: this.transformer }).visit(ctx);
  }

  visitDisjunction(ctx: DisjunctionContext): VisualExpressionType {
    return new CompoundVisitor({ transformer: this.transformer }).visit(ctx);
  }

  visitEclrefinement(ctx: EclrefinementContext): VisualExpressionType {
    // If there are nested attribute groups, we render a grouping to wrap them.
    if (
      ctx.subrefinement().eclattributegroup() ||
      ctx
        .conjunctionrefinementset()
        ?.subrefinement()
        .find((sr) => sr.eclattributegroup()) ||
      ctx
        .disjunctionrefinementset()
        ?.subrefinement()
        .find((sr) => sr.eclattributegroup())
    ) {
      const visitor = new RefinementVisitor({
          transformer: this.transformer,
          attributeGrouping: true,
          removalContext: this.removalContext,
        }),
        conjunctionRefinementSet = ctx.conjunctionrefinementset(),
        disjunctionRefinementSet = ctx.disjunctionrefinementset();
      if (disjunctionRefinementSet) {
        return visitor.renderRefinementSet(
          ctx,
          disjunctionRefinementSet.disjunction(),
          "disjunction"
        );
      } else {
        return visitor.renderRefinementSet(
          ctx,
          conjunctionRefinementSet?.conjunction() ?? [],
          "conjunction"
        );
      }
    } else {
      return this.visitChildren(ctx);
    }
  }

  visitEclattributeset(ctx: EclattributesetContext): VisualExpressionType {
    const conjunctionAttributeSet = ctx.conjunctionattributeset(),
      disjunctionAttributeSet = ctx.disjunctionattributeset();
    if (disjunctionAttributeSet) {
      return this.renderAttributeSet(
        ctx,
        disjunctionAttributeSet.disjunction(),
        "disjunction"
      );
    } else {
      return this.renderAttributeSet(
        ctx,
        conjunctionAttributeSet?.conjunction() ?? [],
        "conjunction"
      );
    }
  }

  visitEclattribute(ctx: EclattributeContext): VisualExpressionType {
    return (
      <Attribute
        onRemove={() =>
          this.transformer.removeAllSpans(this.removalContext, {
            collapseWhiteSpaceLeft: true,
          })
        }
      >
        {this.visitChildren(ctx)}
      </Attribute>
    );
  }

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

  renderAttributeSet(
    ctx: EclattributesetContext,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ): VisualExpressionType {
    const logicalAttributeSet =
      ctx.conjunctionattributeset() ?? ctx.disjunctionattributeset();
    const subAttributeSets = [
      ctx.subattributeset(),
      ...(logicalAttributeSet?.subattributeset() ?? []),
    ];
    const children = this.renderBinaryOperatorChildren(
      ctx,
      subAttributeSets,
      operatorCtx
    );
    return (
      <AttributeSet
        type={type}
        hideAddGroup={this.attributeGrouping}
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
        {children}
      </AttributeSet>
    );
  }

  renderRefinementSet(
    ctx: EclrefinementContext,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ): VisualExpressionType {
    const logicalRefinementSet =
      ctx.conjunctionrefinementset() ?? ctx.disjunctionrefinementset();
    const subRefinementSets = [
      ctx.subrefinement(),
      ...(logicalRefinementSet?.subrefinement() ?? []),
    ];
    const children = this.renderBinaryOperatorChildren(
      ctx,
      subRefinementSets,
      operatorCtx
    );
    return (
      <AttributeGroup
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
        {children}
      </AttributeGroup>
    );
  }

  private renderBinaryOperatorChildren(
    ctx: ParserRuleContext,
    subCtxs: ParserRuleContext[],
    operatorCtx: ParserRuleContext[]
  ) {
    if (subCtxs.length > 1) {
      const children = interleave(subCtxs, operatorCtx);
      let result: ReactNode[] = [];
      for (let i = 0; i < children.length; i++) {
        const removalContext = this.transformer.getBinaryOperatorRemovalContext(
          children,
          i
        );
        result = result.concat(
          new RefinementVisitor({
            transformer: this.transformer,
            attributeGrouping: this.attributeGrouping,
            removalContext,
          }).visit(children[i])
        );
      }
      return result;
    } else {
      return this.visitChildren(ctx);
    }
  }
}
