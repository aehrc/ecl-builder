/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import React, { Children } from "react";
import { interleave } from "../../../array";
import {
  ConjunctionexpressionconstraintContext,
  DisjunctionexpressionconstraintContext,
  ExclusionexpressionconstraintContext,
  ExpressionconstraintContext,
  SubexpressionconstraintContext,
} from "../../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "../BaseEclVisitor";
import { ExpressionVisitor, VisualExpressionType } from "../ExpressionVisitor";
import { isFocused } from "../FocusProvider";
import SubExpressionVisitor, { SubExpressionVisitorOptions } from "../sub/SubExpressionVisitor";
import LogicOperator from "./LogicOperator";
import LogicStatement, {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./LogicStatement";
import LogicStatementSubExpression from "./LogicStatementSubExpression";

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
    ctx: ExpressionconstraintContext
  ): VisualExpressionType {
    return new ExpressionVisitor(this.options).visit(ctx);
  }

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

  visitExclusionexpressionconstraint(
    ctx: ExclusionexpressionconstraintContext
  ): VisualExpressionType {
    return this.renderLogicStatement(ctx, ctx.exclusion(), "exclusion");
  }

  visitSubexpressionconstraint(
    ctx: SubexpressionconstraintContext
  ): VisualExpressionType {
    return (
      <LogicStatementSubExpression
        onRemove={() =>
          this.transformer.removeAllSpans(this.options.removalContext, {
            focusUpdateStrategy: "BEFORE_UPDATE",
          })
        }
      >
        {new SubExpressionVisitor({ ...this.options, compound: true }).visit(
          ctx
        )}
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

  private renderLogicStatement(
    ctx:
      | ConjunctionexpressionconstraintContext
      | DisjunctionexpressionconstraintContext
      | ExclusionexpressionconstraintContext,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ): VisualExpressionType {
    let result: VisualExpressionType;

    const parent = this.options.parent;
    const subexpressions = ctx.subexpressionconstraint();

    if (subexpressions.length > 1) {
      // If there is more than one sub-expression in the statement, harvest the removal context
      // and then re-assemble the children.
      if (!Array.isArray(operatorCtx)) operatorCtx = [operatorCtx]
      const children = interleave(ctx.subexpressionconstraint(), operatorCtx);
      result = [];
      for (let i = 0; i < children.length; i++) {
        const removalContext = this.transformer.getBinaryOperatorRemovalContext(
          children,
          i
        );

        // Include parentheses in removal context if there are only 2 subexpressions
        if (subexpressions.length < 3 && parent) {
          const parentheses = [parent.LEFT_PAREN(), parent.RIGHT_PAREN()];
          removalContext.push(...parentheses.map(node => this.transformer.spanFromTerminalNode(node)));
          removalContext.sort((a, b) => a.start - b.start);
        }

        result = Children.toArray(result).concat(
          new CompoundVisitor({
            ...this.options,
            removalContext,
          }).visit(children[i])
        );
      }
    } else {
      result = this.visitChildren(ctx);
    }

    return (
      <LogicStatement
        type={type}
        focus={isFocused(ctx, this.options.focusPosition)}
        nSubexpressions={subexpressions.length}
        onChangeType={(type) =>
          this.transformer.applyUpdates(
            operatorCtx,
            logicStatementTypeToOperator[type]
          )
        }
        onAddCondition={(expression, focusPosition) => {
          this.transformer.append(ctx, expression, false, {
            focusUpdateStrategy: "SPECIFIED_POSITION",
            focusPosition,
          });
        }}
      >
        {result}
      </LogicStatement>
    );
  }
}
