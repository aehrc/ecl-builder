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
import ConceptReference from "./ConceptReference";
import ConstraintOperator, {
  operatorToConstraintName,
} from "./ConstraintOperator";
import ExpressionConstraint from "./ExpressionConstraint";
import SubExpression from "./SubExpression";

export type VisualExpressionType = ReactNode;

/**
 * This component implements an ANTLR visitor, delegating out to other
 * components to render the supported elements of the grammar.
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
    return (
      <ExpressionConstraint>{this.visitChildren(ctx)}</ExpressionConstraint>
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
        onChange={(e) => this.handlePrepend(e)}
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
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then substitutes those characters with the expression reported by the
   * component.
   */
  handleUpdate(ctx: ParserRuleContext, expression: string): void {
    if (this.onChange) {
      const start = ctx.start.start,
        stop = ctx.stop?.stop;
      if (stop !== undefined) {
        const newExpression =
          this.expression.slice(0, start) +
          expression +
          this.expression.slice(stop + 1);
        this.onChange(newExpression);
      }
    }
  }

  /**
   * Prepends a new expression to the start of the existing expression, separating it with an
   * optionally configurable delimiter.
   */
  handlePrepend(expression: string, delimiter: string = " "): void {
    if (this.onChange) {
      const newExpression = expression + delimiter + this.expression;
      this.onChange(newExpression);
    }
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
  if (expression.trim().length === 0) {
    return (
      <ConceptReference
        key={uuid.v4()}
        onChange={(e) => visitor.handleReplace(e)}
      />
    );
  } else {
    return visitor.visit(tree);
  }
}
