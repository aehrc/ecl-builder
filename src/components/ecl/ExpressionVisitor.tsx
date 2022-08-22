/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import antlr4, { ParserRuleContext } from "antlr4";
import React, { ReactNode } from "react";
import ECLLexer from "../../parser/src/grammar/syntax/ECLLexer";
import ECLParser, {
  CompoundexpressionconstraintContext,
  ExpressionconstraintContext,
  RefinedexpressionconstraintContext,
  SubexpressionconstraintContext,
} from "../../parser/src/grammar/syntax/ECLParser";
import BaseEclVisitor from "./BaseEclVisitor";
import BlankExpression from "./BlankExpression";
import CompoundVisitor from "./compound/CompoundVisitor";
import ExpressionConstraint from "./ExpressionConstraint";
import ExpressionTransformer from "./ExpressionTransformer";
import RefinementVisitor from "./refinement/RefinementVisitor";
import SubExpressionVisitor from "./sub/SubExpressionVisitor";

export type VisualExpressionType = ReactNode;

export type ChangeHandler<T = string> = (expression: T) => unknown;

export interface ChangeReporterProps<T = string> {
  // Invoked when expression is updated.
  onChange: ChangeHandler<T>;
}

/**
 * This component implements an ANTLR visitor, delegating out to other components to render the
 * supported elements of the grammar.
 *
 * @author John Grimes
 */
class ExpressionVisitor extends BaseEclVisitor {
  constructor(expression: string, onChange: (expression: string) => unknown) {
    super(new ExpressionTransformer(expression, onChange));
  }

  /**
   * expressionconstraint : ws ( refinedexpressionconstraint | compoundexpressionconstraint |
   * dottedexpressionconstraint | subexpressionconstraint ) ws;
   */
  visitExpressionconstraint(
    ctx: ExpressionconstraintContext
  ): VisualExpressionType {
    return ctx.subexpressionconstraint() ? (
      <ExpressionConstraint>{this.visitChildren(ctx)}</ExpressionConstraint>
    ) : (
      this.visitChildren(ctx)
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
    return new SubExpressionVisitor(this.transformer).visit(ctx);
  }

  /**
   * compoundexpressionconstraint : conjunctionexpressionconstraint |
   * disjunctionexpressionconstraint | exclusionexpressionconstraint;
   */
  visitCompoundexpressionconstraint(
    ctx: CompoundexpressionconstraintContext
  ): VisualExpressionType {
    return new CompoundVisitor(this.transformer).visit(ctx);
  }

  /**
   * refinedexpressionconstraint : subexpressionconstraint ws COLON ws eclrefinement;
   */
  visitRefinedexpressionconstraint(
    ctx: RefinedexpressionconstraintContext
  ): VisualExpressionType {
    return new RefinementVisitor(this.transformer).visit(ctx);
  }
}

function getExpressionContext(expression: string): ExpressionconstraintContext {
  const input = new antlr4.InputStream(expression),
    lexer = new ECLLexer(input),
    tokens = new antlr4.CommonTokenStream(lexer),
    parser = new ECLParser(tokens);
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
  const visitor = new ExpressionVisitor(expression, onChange);
  // If there is nothing but whitespace in the expression, we render a blank concept reference
  // component to bootstrap the build.
  if (expression.trim().length === 0) {
    return <BlankExpression onChange={(e) => visitor.transformer.replace(e)} />;
  } else {
    return visitor.visit(tree);
  }
}
