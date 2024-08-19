/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import React, { Children } from "react";
import { interleave } from "../../../array";
import {
  ConjunctionexpressionconstraintContext,
  ConstraintoperatorContext,
  DisjunctionexpressionconstraintContext,
  ExclusionexpressionconstraintContext,
  ExpressionconstraintContext,
  SubexpressionconstraintContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import { ExpressionVisitor, VisualExpressionType } from "../ExpressionVisitor";
import { isFocused } from "../FocusProvider";
import SubExpressionVisitor, {
  SubExpressionVisitorOptions,
} from "../sub/SubExpressionVisitor";
import LogicOperator from "./LogicOperator";
import LogicStatement, {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./LogicStatement";
import LogicStatementSubExpression from "./LogicStatementSubExpression";
import { Span } from "../ExpressionTransformer";
import ConstraintOperator, {
  constraintNameToOperator,
  operatorToConstraintName,
} from "../sub/ConstraintOperator";
import MemberOfOperator, { MEMBER_OF_OPERATOR } from "../sub/MemberOfOperator";
import { nonNullish } from "../../../types";

/**
 * This component implements an ANTLR visitor specialised to the task of rendering compound
 * expressions.
 */
export default class CompoundVisitor extends BaseEclVisitor {
  readonly options: SubExpressionVisitorOptions;

  constructor(options: SubExpressionVisitorOptions) {
    super(options);
    this.options = options;
  }

  visitExpressionconstraint(
    ctx: ExpressionconstraintContext,
  ): VisualExpressionType {
    return new ExpressionVisitor(this.options).visit(ctx);
  }

  visitConjunctionexpressionconstraint(
    ctx: ConjunctionexpressionconstraintContext,
  ): VisualExpressionType {
    return this.renderLogicStatement(ctx, ctx.conjunction(), "conjunction");
  }

  visitDisjunctionexpressionconstraint(
    ctx: DisjunctionexpressionconstraintContext,
  ): VisualExpressionType {
    return this.renderLogicStatement(ctx, ctx.disjunction(), "disjunction");
  }

  visitExclusionexpressionconstraint(
    ctx: ExclusionexpressionconstraintContext,
  ): VisualExpressionType {
    return this.renderLogicStatement(ctx, ctx.exclusion(), "exclusion");
  }

  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext,
  ): VisualExpressionType {
    return (
      <LogicStatementSubExpression
        onRemove={() =>
          this.transformer.removeAllSpans(this.options.removalContext, {
            focusUpdateStrategy: "BEFORE_UPDATE",
            collapseWhiteSpaceLeft: true,
            preserveFirstWhiteSpace:
              this.options.removalOptions?.preserveFirstWhiteSpace,
          })
        }
      >
        {new SubExpressionVisitor({
          ...this.options,
          removalOptions: undefined,
          compound: true,
          refinement: false,
        }).visit(ctx)}
      </LogicStatementSubExpression>
    );
  }

  visitConjunction(): VisualExpressionType {
    return <LogicOperator type="conjunction" />;
  }

  visitDisjunction(): VisualExpressionType {
    return <LogicOperator type="disjunction" />;
  }

  visitExclusion(): VisualExpressionType {
    return <LogicOperator type="exclusion" />;
  }

  visitMemberof(): VisualExpressionType {
    return <MemberOfOperator />;
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

  private renderLogicStatement(
    ctx:
      | ConjunctionexpressionconstraintContext
      | DisjunctionexpressionconstraintContext
      | ExclusionexpressionconstraintContext,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType,
  ): VisualExpressionType {
    let result: VisualExpressionType;

    const parent = this.options.parent;
    const subexpressions = ctx.subexpressionconstraint();

    if (subexpressions.length > 1) {
      // If there is more than one sub-expression in the statement, harvest the removal context
      // and then re-assemble the children.
      if (!Array.isArray(operatorCtx)) operatorCtx = [operatorCtx];
      const children = interleave(ctx.subexpressionconstraint(), operatorCtx);
      result = [];
      for (let i = 0; i < children.length; i++) {
        const removalContext = this.transformer.getBinaryOperatorRemovalContext(
          children,
          i,
        );

        // Preserve the first white space if subexpression is not the first or last subexpression
        const removalOptions = {
          preserveFirstWhiteSpace: i !== 0 && i !== children.length - 1,
        };

        // Include parentheses in removal context if there are only 2 subexpressions
        if (
          subexpressions.length < 3 &&
          parent &&
          !parent.memberof() &&
          !parent.constraintoperator()
        ) {
          const parentheses = [parent.LEFT_PAREN(), parent.RIGHT_PAREN()];
          removalContext.push(
            ...parentheses.map((node) =>
              this.transformer.spanFromTerminalNode(node),
            ),
          );
          removalContext.sort((a, b) => a.start - b.start);
          // Preserve the first white space when removing parentheses
          removalOptions.preserveFirstWhiteSpace = true;
        }

        result = Children.toArray(result).concat(
          new CompoundVisitor({
            ...this.options,
            removalContext,
            removalOptions,
          }).visit(children[i]),
        );
      }
      result = Children.toArray(result);
    } else {
      result = this.visitChildren(ctx);
    }

    const heading: VisualExpressionType = [
      parent?.constraintoperator(),
      parent?.memberof(),
    ]
      .filter(nonNullish)
      .map((ctx: ParserRuleContext) => this.visit(ctx));

    return (
      <LogicStatement
        type={type}
        focus={isFocused(ctx, this.options.focusPosition)}
        nSubexpressions={subexpressions.length}
        onChangeType={(type) =>
          this.transformer.applyUpdates(
            operatorCtx,
            logicStatementTypeToOperator[type],
          )
        }
        onAddCondition={(expression, focusPosition) => {
          this.transformer.append(ctx, expression, false, false, {
            focusUpdateStrategy: "SPECIFIED_POSITION",
            focusPosition,
          });
        }}
        heading={heading}
        constraint={!!parent?.constraintoperator()}
        memberOf={!!parent?.memberof()}
        refinement={this.options.refinement}
        onAddConstraint={() => {
          const memberOf = parent?.memberof();
          this.handleAddConstraint(
            memberOf
              ? this.transformer.spanFromContext(memberOf)
              : parent
                ? this.transformer.spanFromTerminalNode(parent.LEFT_PAREN())
                : this.transformer.spanFromContext(ctx),
            !parent,
          );
        }}
        onRemoveConstraint={() => parent && this.handleRemoveConstraint(parent)}
        onAddMemberOf={() => {
          const leftSurroundingParenthesis = parent?.LEFT_PAREN();
          this.handleAddMemberOf(
            leftSurroundingParenthesis
              ? this.transformer.spanFromTerminalNode(
                  leftSurroundingParenthesis,
                )
              : this.transformer.spanFromContext(ctx),
            !parent,
          );
        }}
        onRemoveMemberOf={() => parent && this.handleRemoveMemberOf(parent)}
        onRemoveRefinement={() => this.handleRemoveRefinement()}
        onAddLogicStatement={(expression, focusPosition) =>
          this.handleAddLogicStatement(
            parent ?? ctx,
            expression,
            focusPosition,
            !parent,
          )
        }
        onAddRefinement={(e) =>
          this.handleAddRefinement(
            this.transformer.spanFromContext(parent ?? ctx),
            e,
            this.options.attribute || this.options.compound,
            !parent,
          )
        }
      >
        {result}
      </LogicStatement>
    );
  }

  private handleAddConstraint(prependSubject: Span, preParenthesize: boolean) {
    this.transformer.prependToSpan(
      prependSubject,
      constraintNameToOperator["descendantorselfof"],
      false,
      preParenthesize,
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

  private handleAddMemberOf(
    prependSubject: Span,
    preParenthesize: boolean,
  ): void {
    this.transformer.prependToSpan(
      prependSubject,
      MEMBER_OF_OPERATOR,
      false,
      preParenthesize,
      {
        focusUpdateStrategy: "END_OF_UPDATE",
      },
    );
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
    preParenthesize: boolean,
  ) {
    this.transformer.append(ctx, expression, true, preParenthesize, {
      focusUpdateStrategy: "SPECIFIED_POSITION",
      focusPosition,
    });
  }

  private handleAddRefinement(
    span: Span,
    e: string,
    parenthesize: boolean,
    preParenthesize: boolean,
  ) {
    this.transformer.appendToSpan(
      span,
      `: ${e}`,
      parenthesize,
      preParenthesize,
      {
        focusUpdateStrategy: "SPECIFIED_POSITION",
        focusPosition: 2,
      },
    );
  }
}
