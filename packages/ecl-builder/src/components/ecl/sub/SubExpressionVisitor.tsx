/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import { TerminalNode } from "antlr4/tree/Tree";
import React from "react";
import { REFERENCE_SET_VALUE_SET_URI } from "../../../constants";
import {
  CompoundexpressionconstraintContext,
  ConceptfilterconstraintContext,
  ConstraintoperatorContext,
  DescriptionfilterconstraintContext,
  EclconceptreferenceContext,
  ExpressionconstraintContext,
  HistorysupplementContext,
  MemberfilterconstraintContext,
  RefinedexpressionconstraintContext,
  SubexpressionconstraintContext,
  WildcardContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import { nonNullish } from "../../../types";
import BaseEclVisitor, { BaseEclVisitorOptions } from "../BaseEclVisitor";
import CompoundVisitor from "../compound/CompoundVisitor";
import { logicStatementTypeToOperator } from "../compound/LogicStatement";
import { Span } from "../ExpressionTransformer";
import { VisualExpressionType } from "../ExpressionVisitor";
import Fallback from "../Fallback";
import { isFocused } from "../FocusProvider";
import RefinementVisitor from "../refinement/RefinementVisitor";
import ConceptReference from "./ConceptReference";
import ConceptSearchScope from "./ConceptSearchScope";
import ConstraintOperator, {
  constraintNameToOperator,
  operatorToConstraintName,
} from "./ConstraintOperator";
import MemberOfOperator, { MEMBER_OF_OPERATOR } from "./MemberOfOperator";
import NestedSubExpression from "./NestedSubExpression";
import SubExpression from "./SubExpression";

export interface SubExpressionVisitorOptions extends BaseEclVisitorOptions {
  // Provides the parent sub-expression to inform rendering of nested expressions.
  parent?: SubExpressionWithNestedExpression;
}

interface SubExpressionWithNestedExpression
  extends SubexpressionconstraintContext {
  expressionconstraint(): ExpressionconstraintContext;
  LEFT_PAREN(): TerminalNode;
  RIGHT_PAREN(): TerminalNode;
}

/**
 * This component implements an ANTLR visitor specialised to the task of rendering sub-expressions.
 *
 * @author John Grimes
 */
export default class SubExpressionVisitor extends BaseEclVisitor {
  readonly options: SubExpressionVisitorOptions;

  constructor(options: SubExpressionVisitorOptions) {
    super(options);
    this.options = options;
  }

  visitExpressionconstraint(
    ctx: ExpressionconstraintContext
  ): VisualExpressionType {
    const compoundExpression = ctx.compoundexpressionconstraint(),
      refinementExpression = ctx.refinedexpressionconstraint();
    if (
      // If the expression is nested within a compound expression, skip the rendering of the grouping.
      this.options.compound ||
      // If the expression contains a refinement expression or a compound expression, we skip the
      // rendering of the grouping as these expression types already render as a grouping.
      !!compoundExpression ||
      !!refinementExpression
    ) {
      return this.visitChildren(ctx);
    }
    const parent = this.options.parent;
    if (!parent) {
      throw new Error(
        "Visited nested expression within sub-expression without parent being set"
      );
    }
    const heading: VisualExpressionType = [
      parent.constraintoperator(),
      parent.memberof(),
    ]
      .filter(nonNullish)
      .map((ctx: ParserRuleContext) => this.visit(ctx));
    return (
      <NestedSubExpression
        heading={heading}
        constraint={!!parent.constraintoperator()}
        memberOf={!!parent.memberof()}
        refinement={this.options.refinement}
        onAddConstraint={() => {
          const memberOf = parent.memberof();
          this.handleAddConstraint(
            memberOf
              ? this.transformer.spanFromContext(memberOf)
              : this.transformer.spanFromTerminalNode(parent.LEFT_PAREN())
          );
        }}
        onRemoveConstraint={() => this.handleRemoveConstraint(parent)}
        onAddMemberOf={() => {
          const leftSurroundingParenthesis = parent.LEFT_PAREN();
          if (leftSurroundingParenthesis) {
            this.handleAddMemberOf(
              this.transformer.spanFromTerminalNode(leftSurroundingParenthesis)
            );
          }
        }}
        onRemoveMemberOf={() => this.handleRemoveMemberOf(parent)}
        onRemoveRefinement={() => this.handleRemoveRefinement()}
        onAddLogicStatement={(type, expression) =>
          this.handleAddLogicStatement(ctx, type, expression)
        }
        onAddRefinement={(e) =>
          this.handleAddRefinement(
            this.transformer.spanFromTerminalNode(parent.RIGHT_PAREN()),
            e
          )
        }
      >
        {this.visitChildren(ctx)}
      </NestedSubExpression>
    );
  }

  visitRefinedexpressionconstraint(
    ctx: RefinedexpressionconstraintContext
  ): VisualExpressionType {
    return new RefinementVisitor(this.options).visit(ctx);
  }

  visitCompoundexpressionconstraint(
    ctx: CompoundexpressionconstraintContext
  ): VisualExpressionType {
    return new CompoundVisitor(this.options).visit(ctx);
  }

  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    // If the expression contains a nested expression, we render it differently using a grouping.
    // The expression constraint visitor method within this class handles this alternate rendering.
    const expressionConstraint = ctx.expressionconstraint(),
      content = expressionConstraint ? (
        new SubExpressionVisitor({
          ...this.options,
          parent: ctx as SubExpressionWithNestedExpression,
        }).visit(expressionConstraint)
      ) : (
        <SubExpression
          constraint={!!ctx.constraintoperator()}
          memberOf={!!ctx.memberof()}
          refinement={this.options.refinement}
          onAddConstraint={() =>
            this.handleAddConstraint(this.transformer.spanFromContext(ctx))
          }
          onRemoveConstraint={() => this.handleRemoveConstraint(ctx)}
          onAddMemberOf={() => {
            const eclFocusConcept = ctx.eclfocusconcept();
            if (eclFocusConcept) {
              this.handleAddMemberOf(
                this.transformer.spanFromContext(eclFocusConcept)
              );
            }
          }}
          onRemoveMemberOf={() => this.handleRemoveMemberOf(ctx)}
          onRemoveRefinement={() => this.handleRemoveRefinement()}
          onAddLogicStatement={(type, expression) =>
            this.handleAddLogicStatement(ctx, type, expression)
          }
          onAddRefinement={(e) =>
            this.handleAddRefinement(this.transformer.spanFromContext(ctx), e)
          }
        >
          {this.visitChildren(ctx)}
        </SubExpression>
      );
    // If there is a "member of" operator within this sub-expression, we modify the scope of concept
    // search to only return reference set concepts.
    return ctx.memberof() ? (
      <ConceptSearchScope.Provider
        value={{
          valueSet: REFERENCE_SET_VALUE_SET_URI,
          label: "Search for a reference set",
        }}
      >
        {content}
      </ConceptSearchScope.Provider>
    ) : (
      content
    );
  }

  visitMemberof(): VisualExpressionType {
    return <MemberOfOperator />;
  }

  visitEclconceptreference(
    ctx: EclconceptreferenceContext
  ): VisualExpressionType {
    return (
      <ConceptReference
        concept={{
          type: "SPECIFIC_CONCEPT",
          id: ctx.conceptid().getText(),
          display: ctx.term()?.getText(),
        }}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitWildcard(ctx: WildcardContext): VisualExpressionType {
    return (
      <ConceptReference
        concept={{ type: "ANY_CONCEPT" }}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitConstraintoperator(
    ctx: ConstraintoperatorContext
  ): VisualExpressionType {
    return (
      <ConstraintOperator
        constraint={operatorToConstraintName[ctx.getText()]}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitDescriptionfilterconstraint(
    ctx: DescriptionfilterconstraintContext
  ): VisualExpressionType {
    return (
      <Fallback
        name="Description filter"
        expression={ctx.getText()}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitConceptfilterconstraint(
    ctx: ConceptfilterconstraintContext
  ): VisualExpressionType {
    return (
      <Fallback
        name="Concept filter"
        expression={ctx.getText()}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitMemberfilterconstraint(
    ctx: MemberfilterconstraintContext
  ): VisualExpressionType {
    return (
      <Fallback
        name="Member filter"
        expression={ctx.getText()}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  visitHistorysupplement(ctx: HistorysupplementContext): VisualExpressionType {
    return (
      <Fallback
        name="History supplement"
        expression={ctx.getText()}
        focus={isFocused(ctx, this.options.focusPosition)}
        onChange={(e) => this.transformer.applyUpdate(ctx, e)}
      />
    );
  }

  private handleAddConstraint(prependSubject: Span) {
    this.transformer.prependToSpan(
      prependSubject,
      constraintNameToOperator["descendantorselfof"]
    );
  }

  private handleRemoveConstraint(ctx: SubexpressionconstraintContext) {
    const constraintOperator = ctx.constraintoperator();
    if (constraintOperator) {
      this.transformer.remove(constraintOperator, {
        collapseWhiteSpaceRight: true,
        focusUpdateStrategy: "AFTER_UPDATE",
      });
    } else {
      console.warn("Attempted to remove constraint, no constraint available");
    }
  }

  private handleAddMemberOf(prependSubject: Span): void {
    this.transformer.prependToSpan(prependSubject, MEMBER_OF_OPERATOR, {
      focusUpdateStrategy: "AFTER_UPDATE",
    });
  }

  private handleRemoveMemberOf(ctx: SubexpressionconstraintContext) {
    const memberOf = ctx.memberof();
    if (memberOf) {
      this.transformer.remove(memberOf, {
        collapseWhiteSpaceRight: true,
        focusUpdateStrategy: "AFTER_UPDATE",
      });
    } else {
      console.warn(
        "Attempted to remove member of operator, no member of operator found"
      );
    }
  }

  private handleRemoveRefinement() {
    this.transformer.removeAllSpans(this.options.removalContext);
  }

  private handleAddLogicStatement(
    ctx: ParserRuleContext,
    type: "conjunction" | "disjunction",
    expression: string
  ) {
    this.transformer.append(
      ctx,
      logicStatementTypeToOperator[type] + expression,
      { parenthesize: true }
    );
  }

  private handleAddRefinement(span: Span, e: string) {
    this.transformer.appendToSpan(span, `: ${e}`);
  }
}
