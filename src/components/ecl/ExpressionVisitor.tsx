/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box, Stack } from "@mui/material";
import antlr4, { ParserRuleContext } from "antlr4";
import React, { ReactNode } from "react";
import * as uuid from "uuid";
import ECLLexer from "../../parser/src/grammar/syntax/ECLLexer";
import ECLParser from "../../parser/src/grammar/syntax/ECLParser";
import ECLVisitor from "../../parser/src/grammar/syntax/ECLVisitor";
import ConceptReference from "./ConceptReference";

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

  visit(ctx: any): VisualExpressionType {
    // @ts-ignore
    return super.visit(ctx);
  }

  visitChildren(ctx: any): VisualExpressionType {
    // @ts-ignore
    return super.visitChildren(ctx);
  }

  handleChange(ctx: ParserRuleContext, expression: string): void {
    if (this.onChange) {
      // This code uses the parser rule context to identify the range of characters within the
      // expression that have changed, and then substitutes those characters with the expression
      // reported by the component.
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

  visitExpressionconstraint(ctx: any): VisualExpressionType {
    return (
      <Box key={uuid.v4()}>
        <Stack spacing={2}>{this.visitChildren(ctx)}</Stack>
      </Box>
    );
  }

  visitEclconceptreference(ctx: any): VisualExpressionType {
    return (
      <ConceptReference
        key={uuid.v4()}
        concept={{
          id: ctx.conceptid().getText(),
          display: ctx.term().getText(),
        }}
        onChange={(e) => this.handleChange(ctx, e)}
      />
    );
  }

  protected defaultResult(): VisualExpressionType {
    throw new Error("Fell through to default result");
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
  const visitor = new ExpressionVisitor(expression, onChange);
  return <Box>{visitor.visit(tree)}</Box>;
}
