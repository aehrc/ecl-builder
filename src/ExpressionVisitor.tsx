/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box } from "@mui/material";
import antlr4 from "antlr4";
import React, { ReactNode } from "react";
import SnomedId from "./components/SnomedId";
import ECLLexer from "./parser/src/grammar/syntax/ECLLexer";
import ECLParser from "./parser/src/grammar/syntax/ECLParser";
import ECLVisitor from "./parser/src/grammar/syntax/ECLVisitor";

export type VisualExpressionType = ReactNode;

class ExpressionVisitor extends ECLVisitor {

  readonly expression: string;
  readonly onChange?: (expression: string) => unknown;

  constructor(expression: string, onChange?: (expression: string) => unknown) {
    super();
    this.expression = expression;
    this.onChange = onChange;
  }

  visitEclconceptreference(ctx: any) {
    return <SnomedId expression={ctx.conceptid().sctid().getText()} />;
  }

  // noinspection JSUnusedGlobalSymbols
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
  tree: any,
  onChange?: (expression: string) => unknown
) {
  const visitor = new ExpressionVisitor(expression, onChange);
  return <Box>{visitor.visit(tree)}</Box>;
}
