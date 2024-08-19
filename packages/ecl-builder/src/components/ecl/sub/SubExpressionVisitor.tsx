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
    ctx: ExpressionconstraintContext,
  ): VisualExpressionType {
    const parent = this.options.parent;
    const compoundExpression = ctx.compoundexpressionconstraint(),
      refinementExpression = ctx.refinedexpressionconstraint();
    if (
      // If the expression contains a refinement expression or a compound expression, we skip the
      // rendering of the grouping as these expression types already render as a grouping.
      !!compoundExpression ||
      (!!refinementExpression &&
        !parent?.memberof() &&
        !parent?.constraintoperator())
    ) {
      return this.visitChildren(ctx);
    }
    if (!parent) {
      throw new Error(
        "Visited nested expression within sub-expression without parent being set",
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
              : this.transformer.spanFromTerminalNode(parent.LEFT_PAREN()),
          );
        }}
        onRemoveConstraint={() =>
          this.handleRemoveConstraint(
            parent,
            !refinementExpression && !parent.memberof(),
          )
        }
        onAddMemberOf={() => {
          const leftSurroundingParenthesis = parent.LEFT_PAREN();
          if (leftSurroundingParenthesis) {
            this.handleAddMemberOf(
              this.transformer.spanFromTerminalNode(leftSurroundingParenthesis),
            );
          }
        }}
        onRemoveMemberOf={() =>
          this.handleRemoveMemberOf(
            parent,
            !refinementExpression && !parent.constraintoperator(),
          )
        }
        onRemoveRefinement={() => this.handleRemoveRefinement()}
        onAddLogicStatement={(expression, focusPosition) =>
          this.handleAddLogicStatement(ctx, expression, focusPosition)
        }
        onAddRefinement={(e) =>
          this.handleAddRefinement(
            this.transformer.spanFromContext(parent),
            e,
            this.options.compound,
          )
        }
      >
        {this.visitChildren(ctx)}
      </NestedSubExpression>
    );
  }

  visitRefinedexpressionconstraint(
    ctx: RefinedexpressionconstraintContext,
  ): VisualExpressionType {
    return new RefinementVisitor(this.options).visit(ctx);
  }

  visitCompoundexpressionconstraint(
    ctx: CompoundexpressionconstraintContext,
  ): VisualExpressionType {
    return new CompoundVisitor(this.options).visit(ctx);
  }

  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext,
  ): VisualExpressionType {
    // If the expression contains a nested expression, we render it differently using a grouping.
    // The expression constraint visitor method within this class handles this alternate rendering.
    const expressionConstraint = ctx.expressionconstraint(),
      content = expressionConstraint ? (
        new SubExpressionVisitor({
          ...this.options,
          parent: ctx as SubExpressionWithNestedExpression,
          attribute: false,
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
                this.transformer.spanFromContext(eclFocusConcept),
              );
            }
          }}
          onRemoveMemberOf={() => this.handleRemoveMemberOf(ctx)}
          onRemoveRefinement={() => this.handleRemoveRefinement()}
          onAddLogicStatement={(expression, focusPosition) =>
            this.handleAddLogicStatement(ctx, expression, focusPosition)
          }
          onAddRefinement={(e) =>
            this.handleAddRefinement(
              this.transformer.spanFromContext(ctx),
              e,
              this.options.attribute || this.options.compound,
            )
          }
        >
          {new SubExpressionVisitor({
            ...this.options,
            attribute: false,
          }).visitChildren(ctx)}
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
    ctx: EclconceptreferenceContext,
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
    ctx: ConstraintoperatorContext,
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
    ctx: DescriptionfilterconstraintContext,
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
    ctx: ConceptfilterconstraintContext,
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
    ctx: MemberfilterconstraintContext,
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
      constraintNameToOperator["descendantorselfof"],
      false,
      false,
    );
  }

  private handleRemoveConstraint(
    ctx: SubexpressionconstraintContext,
    removeParentheses = false,
  ) {
    const constraintOperator = ctx.constraintoperator();
    if (constraintOperator) {
      let removalContext = [
        this.transformer.spanFromContext(constraintOperator),
      ];
      if (removeParentheses) {
        removalContext = this.appendSurroundingParentheses(removalContext);
      }
      this.transformer.removeAllSpans(removalContext, {
        collapseWhiteSpaceRight: true,
        focusUpdateStrategy: "AFTER_UPDATE",
      });
    } else {
      console.warn("Attempted to remove constraint, no constraint available");
    }
  }

  private handleAddMemberOf(prependSubject: Span): void {
    this.transformer.prependToSpan(
      prependSubject,
      MEMBER_OF_OPERATOR,
      false,
      false,
      {
        focusUpdateStrategy: "END_OF_UPDATE",
      },
    );
  }

  private handleRemoveMemberOf(
    ctx: SubexpressionconstraintContext,
    removeParentheses = false,
  ) {
    const memberOf = ctx.memberof();
    if (memberOf) {
      let removalContext = [this.transformer.spanFromContext(memberOf)];
      if (removeParentheses) {
        removalContext = this.appendSurroundingParentheses(removalContext);
      }
      this.transformer.removeAllSpans(removalContext, {
        collapseWhiteSpaceRight: true,
        focusUpdateStrategy: "AFTER_UPDATE",
      });
    } else {
      console.warn(
        "Attempted to remove member of operator, no member of operator found",
      );
    }
  }

  private handleRemoveRefinement() {
    this.transformer.removeAllSpans(this.options.removalContext);
  }

  private handleAddLogicStatement(
    ctx: ParserRuleContext,
    expression: string,
    focusPosition: number,
  ) {
    this.transformer.append(ctx, expression, true, false, {
      focusUpdateStrategy: "SPECIFIED_POSITION",
      focusPosition,
    });
  }

  private handleAddRefinement(span: Span, e: string, parenthesize = false) {
    this.transformer.appendToSpan(span, `: ${e}`, parenthesize, false, {
      focusUpdateStrategy: "SPECIFIED_POSITION",
      focusPosition: 2,
    });
  }

  private appendSurroundingParentheses(removalContext: Span[]) {
    const parent = this.options.parent;
    if (parent) {
      const parentheses = [parent.LEFT_PAREN(), parent.RIGHT_PAREN()];
      removalContext.push(
        ...parentheses.map((node) =>
          this.transformer.spanFromTerminalNode(node),
        ),
      );
      removalContext.sort((a, b) => a.start - b.start);
    }
    return removalContext;
  }
}
