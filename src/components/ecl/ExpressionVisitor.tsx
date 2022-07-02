/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import antlr4, { ParserRuleContext } from "antlr4";
import React, { cloneElement, isValidElement, ReactNode } from "react";
import * as uuid from "uuid";
import ECLLexer from "../../parser/src/grammar/syntax/ECLLexer";
import ECLParser from "../../parser/src/grammar/syntax/ECLParser";
import ECLVisitor from "../../parser/src/grammar/syntax/ECLVisitor";
import AddCondition from "./AddCondition";
import ConceptReference from "./ConceptReference";
import ConstraintOperator, {
  operatorToConstraintName,
} from "./ConstraintOperator";
import ExpressionConstraint from "./ExpressionConstraint";
import LogicOperator from "./LogicOperator";
import LogicStatement, {
  LogicStatementType,
  logicStatementTypeToOperator,
} from "./LogicStatement";
import SubExpression from "./SubExpression";

export type VisualExpressionType = ReactNode;

export type ChangeHandler = (expression: string) => unknown;

export interface ChangeReporterProps {
  // Invoked when expression is updated.
  onChange: ChangeHandler;
}

interface SupplementOptions {
  // A string to use as a delimiter between the original expression and the supplement.
  delimiter?: string;
  // Set this to true to parenthesize the original expression.
  parenthesize?: boolean;
}

/**
 * This component implements an ANTLR visitor, delegating out to other components to render the
 * supported elements of the grammar.
 *
 * @author John Grimes
 */
class ExpressionVisitor extends ECLVisitor {
  readonly expression: string;
  readonly onChange: (expression: string) => unknown;

  constructor(expression: string, onChange: (expression: string) => unknown) {
    super();
    this.expression = expression;
    this.onChange = onChange;
  }

  /**
   * expressionconstraint : ws ( refinedexpressionconstraint | compoundexpressionconstraint |
   * dottedexpressionconstraint | subexpressionconstraint ) ws;
   */
  visitExpressionconstraint(ctx: any): VisualExpressionType {
    const expression = (
      <ExpressionConstraint>{this.visitChildren(ctx)}</ExpressionConstraint>
    );
    return ctx.compoundexpressionconstraint() ? (
      expression
    ) : (
      <AddCondition onChange={(e) => this.handleAppend(ctx, e)}>
        {expression}
      </AddCondition>
    );
  }

  /**
   * subexpressionconstraint: (constraintoperator ws)? ( ( (memberof ws)? (eclfocusconcept |
   * (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) (ws memberfilterconstraint)*) |
   * (eclfocusconcept | (LEFT_PAREN ws expressionconstraint ws RIGHT_PAREN)) ) (ws
   * (descriptionfilterconstraint | conceptfilterconstraint))* (ws historysupplement)?;
   */
  visitSubexpressionconstraint(ctx: any): VisualExpressionType {
    return (
      <SubExpression
        constraint={ctx.constraintoperator()}
        onChange={(e) => this.handlePrepend(ctx, e)}
      >
        {this.visitChildren(ctx)}
      </SubExpression>
    );
  }

  /**
   * constraintoperator : childof | childorselfof | descendantorselfof | descendantof | parentof |
   * parentorselfof | ancestororselfof | ancestorof;
   */
  visitConstraintoperator(ctx: any): VisualExpressionType {
    return (
      <ConstraintOperator
        constraint={operatorToConstraintName[ctx.getText()]}
        onChange={(e) => this.handleUpdate(ctx, e)}
      />
    );
  }

  /**
   * constraintoperator : childof | childorselfof | descendantorselfof | descendantof | parentof |
   * parentorselfof | ancestororselfof | ancestorof;
   */
  visitEclconceptreference(ctx: any): VisualExpressionType {
    return (
      <ConceptReference
        concept={{
          id: ctx.conceptid().getText(),
          display: ctx.term().getText(),
        }}
        onChange={(e) => this.handleUpdate(ctx, e)}
      />
    );
  }

  /**
   * conjunctionexpressionconstraint : subexpressionconstraint (ws conjunction ws
   * subexpressionconstraint)+;
   */
  visitConjunctionexpressionconstraint(ctx: any): VisualExpressionType {
    return this.visitLogicStatement(ctx, ctx.conjunction(), "conjunction");
  }

  /**
   * disjunctionexpressionconstraint : subexpressionconstraint (ws disjunction ws
   * subexpressionconstraint)+;
   */
  visitDisjunctionexpressionconstraint(ctx: any): VisualExpressionType {
    return this.visitLogicStatement(ctx, ctx.disjunction(), "disjunction");
  }

  private visitLogicStatement(
    ctx: any,
    operatorCtx: ParserRuleContext[],
    type: LogicStatementType
  ) {
    return (
      <AddCondition
        onChange={(e) => this.handleAppend(ctx, e, { parenthesize: true })}
      >
        <LogicStatement
          onChangeType={(type) =>
            this.handleChangeLogicStatementTypes(operatorCtx, type)
          }
          onAddCondition={(e) => this.handleAppend(ctx, e)}
          type={type}
        >
          {this.visitChildren(ctx)}
        </LogicStatement>
      </AddCondition>
    );
  }

  visitConjunction(ctx: any): VisualExpressionType {
    return <LogicOperator type="conjunction" />;
  }

  visitDisjunction(ctx: any): VisualExpressionType {
    return <LogicOperator type="disjunction" />;
  }

  /**
   * Changes a set of logic statements to a new type.
   */
  handleChangeLogicStatementTypes(
    ctxs: ParserRuleContext[],
    type: LogicStatementType
  ) {
    this.handleUpdates(ctxs, logicStatementTypeToOperator[type]);
  }

  /**
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then substitutes those characters with the expression reported by the
   * component.
   */
  handleUpdate(ctx: ParserRuleContext, expression: string): void {
    this.handleUpdates([ctx], expression);
  }

  /**
   * Performs the same function as `handleUpdate`, except that it can replace multiple
   * subexpressions with the same new expression.
   */
  handleUpdates(ctxs: ParserRuleContext[], expression: string): void {
    if (this.onChange) {
      const newExpression = ctxs.reduce((acc, ctx) => {
        const start = ctx.start.start,
          stop = ctx.stop?.stop;
        if (stop !== undefined) {
          // If the prefix ends with whitespace, replace it with a single space.
          let prefix = acc.slice(0, start);
          if (/\s/.test(prefix[prefix.length - 1])) {
            prefix = prefix.trimEnd() + " ";
          }
          // If the suffix starts with whitespace, replace it with a single space.
          let suffix = acc.slice(stop + 1);
          if (/\s/.test(suffix[0])) {
            suffix = " " + suffix.trimStart();
          }
          return prefix + expression + suffix;
        } else {
          return acc;
        }
      }, this.expression);
      this.onChange(newExpression);
    }
  }

  /**
   * Prepends a new expression to the start of the existing expression, separating it with an
   * optionally configurable delimiter.
   */
  handlePrepend(
    ctx: ParserRuleContext,
    expression: string,
    { delimiter = " ", parenthesize = false }: SupplementOptions = {}
  ): void {
    const suffix = /\s/.test(delimiter)
        ? ctx.getText().trimStart()
        : ctx.getText(),
      parenthesizedSuffix = parenthesize ? `(${suffix})` : suffix,
      newExpression = expression + delimiter + parenthesizedSuffix;
    this.handleUpdate(ctx, newExpression);
  }

  /**
   * Appends a new expression to the end of the existing expression, separating it with an
   * optionally configurable delimiter.
   */
  handleAppend(
    ctx: ParserRuleContext,
    expression: string,
    { delimiter = " ", parenthesize = false }: SupplementOptions = {}
  ): void {
    const prefix = /\s/.test(delimiter)
        ? ctx.getText().trimEnd()
        : ctx.getText(),
      parenthesizedPrefix = parenthesize ? `(${prefix})` : prefix,
      newExpression = parenthesizedPrefix + delimiter + expression;
    this.handleUpdate(ctx, newExpression);
  }

  /**
   * Replaces the entire expression.
   */
  handleReplace(expression: string): void {
    if (this.onChange) {
      this.onChange(expression);
    }
  }

  visit(ctx: any): VisualExpressionType {
    // @ts-ignore
    return super.visit(ctx);
  }

  visitChildren(ctx: any): VisualExpressionType {
    // @ts-ignore
    const children = super.visitChildren(ctx);
    if (Array.isArray(children)) {
      // This adds a unique key to each child element, to satisfy the requirement of React that all
      // elements in a list must have a unique key prop.
      // See: https://reactjs.org/docs/lists-and-keys.html#keys
      return children.map((child: VisualExpressionType) =>
        isValidElement(child) ? cloneElement(child, { key: uuid.v4() }) : child
      );
    } else {
      return children;
    }
  }

  protected defaultResult(): VisualExpressionType {
    throw new Error(
      "ExpressionVisitor: visitation fell through to default result"
    );
  }
}

function getExpressionContext(expression: string) {
  const input = new antlr4.InputStream(expression),
    lexer = new ECLLexer(input),
    tokens = new antlr4.CommonTokenStream(lexer),
    parser = new ECLParser(tokens);
  return parser.expressionconstraint();
}

export function visitExpression(
  expression: string,
  onChange: (expression: string) => unknown
) {
  return visitExpressionTree(
    expression,
    getExpressionContext(expression),
    onChange
  );
}

export function visitExpressionTree(
  expression: string,
  tree: any,
  onChange: (expression: string) => unknown
) {
  const visitor = new ExpressionVisitor(expression.trim(), onChange);
  // If there is nothing but whitespace in the expression, we render a blank concept reference
  // component to bootstrap the build.
  if (expression.trim().length === 0) {
    return <ConceptReference onChange={(e) => visitor.handleReplace(e)} />;
  } else {
    return visitor.visit(tree);
  }
}
