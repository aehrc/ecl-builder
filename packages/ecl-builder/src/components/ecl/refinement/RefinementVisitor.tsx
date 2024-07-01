/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import { TerminalNode } from "antlr4/tree/Tree";
import React, { ReactNode } from "react";
import { interleave } from "../../../array";
import { ATTRIBUTE_VALUE_SET_URI } from "../../../constants";
import {
  CardinalityContext,
  ConjunctionContext,
  DisjunctionContext,
  EclattributeContext,
  EclattributegroupContext,
  EclattributenameContext,
  EclattributesetContext,
  EclrefinementContext,
  ExpressioncomparisonoperatorContext,
  ExpressionconstraintContext,
  MatchsearchtermsetContext,
  NumericcomparisonoperatorContext,
  NumericvalueContext,
  RefinedexpressionconstraintContext,
  ReverseflagContext,
  StringcomparisonoperatorContext,
  SubexpressionconstraintContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import CompoundVisitor from "../compound/CompoundVisitor";
import {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "../compound/LogicStatement";
import { ExpressionVisitor, VisualExpressionType } from "../ExpressionVisitor";
import Fallback from "../Fallback";
import { isFocused } from "../FocusProvider";
import ConceptSearchScope from "../sub/ConceptSearchScope";
import SubExpressionVisitor, { SubExpressionVisitorOptions } from "../sub/SubExpressionVisitor";
import Attribute from "./Attribute";
import AttributeGroup from "./AttributeGroup";
import AttributeSet from "./AttributeSet";
import Cardinality from "./Cardinality";
import CardinalityVisitor from "./CardinalityVisitor";
import ComparisonOperator from "./ComparisonOperator";
import ConcreteValue from "./ConcreteValue";
import RefinedExpression from "./RefinedExpression";

export interface RefinementVisitorOptions extends SubExpressionVisitorOptions {
  // True if within an attribute grouping.
  attributeGrouping?: boolean;
  // True if within a conjunction of disjunction attribute or refinement set.
  set?: boolean;
}

export const EXPRESSION_COMPARISON_OPERATORS: Record<string, string> = {
  "=": "is equal to",
  "!=": "is not equal to",
};

export const NUMERIC_COMPARISON_OPERATORS: Record<string, string> = {
  "=": "=",
  "!=": "!=",
  "<": "<",
  "<=": "<=",
  ">": ">",
  ">=": ">=",
};

export const STRING_COMPARISON_OPERATORS: Record<string, string> = {
  "=": "=",
  "!=": "!=",
  "<": "<",
  "<=": "<=",
  ">": ">",
  ">=": ">=",
};

export default class RefinementVisitor extends BaseEclVisitor {
  readonly options: RefinementVisitorOptions;

  constructor(options: RefinementVisitorOptions) {
    super(options);
    this.options = options;
  }

  visitExpressionconstraint(
    ctx: ExpressionconstraintContext
  ): VisualExpressionType {
    return new ExpressionVisitor(this.options).visit(ctx);
  }

  visitRefinedexpressionconstraint(
    ctx: RefinedexpressionconstraintContext
  ): VisualExpressionType {
    const removalContext = [
      this.transformer.spanFromTerminalNode(ctx.COLON()),
      this.transformer.spanFromContext(ctx.eclrefinement()),
    ];
    let preserveFirstWhiteSpace = false;
  
    // Subexpression containing the refinement expression
    const parent = this.options.parent;
    if (parent && !parent.memberof() && !parent.constraintoperator()) {
      // Remove parentheses surrounding refinement expression if subexpression does not contain a member of/constraint operator
      const parentheses = [parent.LEFT_PAREN(), parent.RIGHT_PAREN()];
      removalContext.push(...parentheses.map(node => this.transformer.spanFromTerminalNode(node)));
      // Preserve first whitespace when removing parentheses.
      preserveFirstWhiteSpace = true;
    }

    // Subexpression within the refinement expression
    const subCtx = ctx.subexpressionconstraint(),
      expCtx = subCtx.expressionconstraint();
    if (
      subCtx.LEFT_PAREN() && subCtx.RIGHT_PAREN() && 
      !subCtx.memberof() && !subCtx.constraintoperator() && !expCtx?.compoundexpressionconstraint()
    ) {
      // Remove parentheses surrounding subexpression if it does not contain a compound expression or a member of/constraint operator
      const parentheses = [subCtx.LEFT_PAREN(), subCtx.RIGHT_PAREN()] as TerminalNode[];
      removalContext.push(...parentheses.map(node => this.transformer.spanFromTerminalNode(node)));
    }
    removalContext.sort((a, b) => a.start - b.start);

    const visitor = new RefinementVisitor({
      ...this.options,
      refinement: true,
      removalContext,
    });
    return (
      <RefinedExpression
        subExpression={visitor.visit(ctx.subexpressionconstraint())}
        onRemove={() =>
          this.transformer.removeAllSpans(removalContext, {
            focusUpdateStrategy: "BEFORE_UPDATE",
            collapseWhiteSpaceLeft: true,
            preserveFirstWhiteSpace,
          })
        }
      >
        {visitor.visit(ctx.eclrefinement())}
      </RefinedExpression>
    );
  }

  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    return new SubExpressionVisitor(this.options).visit(ctx);
  }

  visitConjunction(ctx: ConjunctionContext): VisualExpressionType {
    return new CompoundVisitor(this.options).visit(ctx);
  }

  visitDisjunction(ctx: DisjunctionContext): VisualExpressionType {
    return new CompoundVisitor(this.options).visit(ctx);
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
          ...this.options,
          attributeGrouping: true,
          refinement: false,
        }),
        conjunctionRefinementSet = ctx.conjunctionrefinementset(),
        disjunctionRefinementSet = ctx.disjunctionrefinementset();
      if (disjunctionRefinementSet) {
        return visitor.renderRefinementSet(
          ctx,
          disjunctionRefinementSet.disjunction(),
          "disjunction"
        );
      } else if (conjunctionRefinementSet) {
        return visitor.renderRefinementSet(
          ctx,
          conjunctionRefinementSet?.conjunction() ?? [],
          "conjunction"
        );
      } else {
        return this.visitChildren(ctx);
      }
    } else {
      return new RefinementVisitor({
        ...this.options,
        refinement: false,
      }).visitChildren(ctx);
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

  visitEclAttributeGroup(ctx: EclattributegroupContext): VisualExpressionType {
    return new RefinementVisitor({
      ...this.options,
      removalContext: [this.transformer.spanFromContext(ctx)],
    }).visitChildren(ctx);
  }

  visitEclattribute(ctx: EclattributeContext): VisualExpressionType {
    return (
      <Attribute
        onRemove={
          // We don't render a remove button if there is only one attribute.
          this.options.set
            ? () =>
                this.transformer.removeAllSpans(this.options.removalContext, {
                  focusUpdateStrategy: "BEFORE_UPDATE",
                  collapseWhiteSpaceLeft: true,
                  preserveFirstWhiteSpace: this.options.removalOptions?.preserveFirstWhiteSpace,
                })
            : undefined
        }
      >
        {new RefinementVisitor({
          ...this.options,
          removalOptions: undefined,
          attribute: true,
        }).visitChildren(ctx)}
      </Attribute>
    );
  }

  visitCardinality(ctx: CardinalityContext): VisualExpressionType {
    const focused =
      isFocused(ctx.minvalue(), this.options.focusPosition) ||
      isFocused(ctx.maxvalue(), this.options.focusPosition);
    return (
      <Cardinality
        focus={focused}
        many={!!ctx.maxvalue().many()}
        onChange={(e) => this.transformer.applyUpdate(ctx.maxvalue(), e)}
      >
        {new CardinalityVisitor({
          ...this.options,
          align: "left",
        }).visitChildren(ctx)}
      </Cardinality>
    );
  }

  visitReverseflag(ctx: ReverseflagContext): VisualExpressionType {
    return (
      <Fallback
        name="Reverse flag"
        expression={ctx.getText()}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
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
        typeLabelMap={EXPRESSION_COMPARISON_OPERATORS}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitNumericcomparisonoperator(
    ctx: NumericcomparisonoperatorContext
  ): VisualExpressionType {
    return (
      <ComparisonOperator
        type={ctx.getText()}
        focus={isFocused(ctx, this.options.focusPosition)}
        typeLabelMap={NUMERIC_COMPARISON_OPERATORS}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitStringcomparisonoperator(
    ctx: StringcomparisonoperatorContext
  ): VisualExpressionType {
    return (
      <ComparisonOperator
        type={ctx.getText()}
        focus={isFocused(ctx, this.options.focusPosition)}
        typeLabelMap={STRING_COMPARISON_OPERATORS}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitMatchsearchtermset(
    ctx: MatchsearchtermsetContext
  ): VisualExpressionType {
    return (
      <ConcreteValue
        value={ctx
          .matchsearchterm()
          .map((m) => m.getText())
          .join(" ")}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, `"${e}"`)}
      />
    );
  }

  visitNumericvalue(ctx: NumericvalueContext): VisualExpressionType {
    return (
      <ConcreteValue
        value={ctx.getText()}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
        props={{ type: "number" }}
        focus={isFocused(ctx, this.options.focusPosition)}
        sx={{ flexBasis: "96px" }}
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
        hideAddGroup={this.options.attributeGrouping}
        onChangeType={(type) =>
          this.transformer.applyUpdates(
            operatorCtx,
            logicStatementTypeToOperator[type]
          )
        }
        onAddAttribute={(expression, focusPosition) =>
          this.transformer.append(ctx, expression, false, false, {
            focusUpdateStrategy: "SPECIFIED_POSITION",
            focusPosition,
          })
        }
        onRemove={() =>
          this.transformer.removeAllSpans(this.options.removalContext, {
            focusUpdateStrategy: "BEFORE_UPDATE",
            collapseWhiteSpaceLeft: true,
            preserveFirstWhiteSpace: this.options.removalOptions?.preserveFirstWhiteSpace,
          })
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
        onAddAttribute={(expression, focusPosition) =>
          this.transformer.append(ctx, expression, false, false, {
            focusUpdateStrategy: "SPECIFIED_POSITION",
            focusPosition,
          })
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
        // Preserve the first white space if child is not first or last in the set
        const removalOptions = { preserveFirstWhiteSpace: i !== 0 && i !== children.length - 1 };
        result = result.concat(
          new RefinementVisitor({
            ...this.options,
            removalContext,
            removalOptions,
            // Render the remove button only if the child is not the first one.
            set: i !== 0,
          }).visit(children[i])
        );
        result = this.addKeys(result);
      }
      return result;
    } else {
      return this.visitChildren(ctx);
    }
  }
}
