/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box } from "@mui/material";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AbstractParseTreeVisitor, ParseTree } from "antlr4ts/tree";
import React, { ReactNode } from "react";
import SnomedId from "./components/SnomedId";
import { ECLLexer } from "./parser/src/grammar/syntax/ECLLexer";
import { ECLParser, SctidContext } from "./parser/src/grammar/syntax/ECLParser";
import { ECLVisitor } from "./parser/src/grammar/syntax/ECLVisitor";

export type VisualExpressionType = ReactNode;

export default class ExpressionVisitor extends AbstractParseTreeVisitor<VisualExpressionType>
  implements ECLVisitor<VisualExpressionType> {

  readonly expression: string;
  readonly onChange?: (expression: string) => unknown;

  constructor(expression: string, onChange?: (expression: string) => unknown) {
    super();
    this.expression = expression;
    this.onChange = onChange;
  }

  visitSctid(ctx: SctidContext): VisualExpressionType {
    return <SnomedId expression={ctx.text} />;
  }

  protected defaultResult(): VisualExpressionType {
    throw new Error(
      "Encountered an expression that I don't know how to display"
    );
  }

}

export function getExpressionContext(expression: string) {
  const input = CharStreams.fromString(expression),
    lexer = new ECLLexer(input),
    tokens = new CommonTokenStream(lexer),
    parser = new ECLParser(tokens);
  return parser.expressionconstraint();
}

export function visitExpression(
  expression: string,
  onChange?: (expression: string) => unknown
) {
  return visitExpressionTree(
    expression,
    getExpressionContext(expression),
    onChange
  );
}

export function visitExpressionTree(
  expression: string,
  tree: ParseTree,
  onChange?: (expression: string) => unknown
) {
  const visitor = new ExpressionVisitor(expression, onChange);

  return <Box>{visitor.visit(tree)}</Box>;
}
