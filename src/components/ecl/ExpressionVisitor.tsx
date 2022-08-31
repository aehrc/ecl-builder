/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import antlr4, { ParserRuleContext } from "antlr4";
import { ErrorListener } from "antlr4/error";
import React, { ReactNode } from "react";
import ECLLexer from "../../parser/src/grammar/syntax/ECLLexer";
import ECLParser, {
  CompoundexpressionconstraintContext,
  ExpressionconstraintContext,
  RefinedexpressionconstraintContext,
  SubexpressionconstraintContext,
} from "../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor, { BaseEclVisitorOptions } from "./BaseEclVisitor";
import BlankExpression from "./BlankExpression";
import CompoundVisitor from "./compound/CompoundVisitor";
import ExpressionConstraint from "./ExpressionConstraint";
import ExpressionParserErrorListener from "./ExpressionParserErrorListener";
import ExpressionTransformer from "./ExpressionTransformer";
import RefinementVisitor from "./refinement/RefinementVisitor";
import SubExpressionVisitor from "./sub/SubExpressionVisitor";

export type VisualExpressionType = ReactNode;

export type ChangeHandler<T = string> = (expression: T) => unknown;

export interface ChangeReporterProps<T = string> {
  // Invoked when expression is updated.
  onChange: ChangeHandler<T>;
}

export type ExpressionVisitorOptions = BaseEclVisitorOptions;

/**
 * This component implements an ANTLR visitor, delegating out to other components to render the
 * supported elements of the grammar.
 *
 * @author John Grimes
 */
export class ExpressionVisitor extends BaseEclVisitor {
  constructor(options: ExpressionVisitorOptions) {
    super(options);
  }

  visitExpressionconstraint(
    ctx: ExpressionconstraintContext
  ): VisualExpressionType {
    return ctx.subexpressionconstraint() ? (
      <ExpressionConstraint>{this.visitChildren(ctx)}</ExpressionConstraint>
    ) : (
      this.visitChildren(ctx)
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
    return new SubExpressionVisitor(this.options).visit(ctx);
  }
}

function getExpressionContext(expression: string): ExpressionconstraintContext {
  const input = new antlr4.InputStream(expression),
    lexer = new ECLLexer(input),
    tokens = new antlr4.CommonTokenStream(lexer),
    parser = new ECLParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(new ExpressionParserErrorListener() as ErrorListener);
  return parser.expressionconstraint();
}

export function visitExpression(
  expression: string,
  onChange: (expression: string) => unknown
): VisualExpressionType {
  return visitExpressionTree(
    expression,
    getExpressionContext(expression),
    onChange
  );
}

export function visitExpressionTree(
  expression: string,
  tree: ParserRuleContext,
  onChange: (expression: string) => unknown
): VisualExpressionType {
  const visitor = new ExpressionVisitor({
    transformer: new ExpressionTransformer(expression, onChange),
    removalContext: [],
    refinement: false,
    attributeGrouping: false,
  });
  // If there is nothing but whitespace in the expression, we render a blank concept reference
  // component to bootstrap the build.
  if (expression.trim().length === 0) {
    return <BlankExpression onChange={(e) => visitor.transformer.replace(e)} />;
  } else {
    return visitor.visit(tree);
  }
}
