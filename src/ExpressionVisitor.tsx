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
import {
  ECLParser,
  SctidContext,
  SubexpressionconstraintContext
} from "./parser/src/grammar/syntax/ECLParser";
import { ECLVisitor } from "./parser/src/grammar/syntax/ECLVisitor";

export type VisualExpressionType = ReactNode;

class ExpressionVisitor
  extends AbstractParseTreeVisitor<VisualExpressionType>
  implements ECLVisitor<VisualExpressionType> {

  readonly expression: string;
  readonly onChange?: (expression: string) => unknown;

  constructor(expression: string, onChange?: (expression: string) => unknown) {
    super();
    this.expression = expression;
    this.onChange = onChange;
  }

  protected aggregateResult(aggregate: VisualExpressionType, nextResult: VisualExpressionType): VisualExpressionType {
    return nextResult ?? aggregate;
  }

  visitSubexpressionconstraint(ctx: SubexpressionconstraintContext): VisualExpressionType {
    return <p>subexpression<p>{ctx.eclfocusconcept()?.accept(this)}</p></p>;
  }

  visitSctid(ctx: SctidContext): VisualExpressionType {
    return <SnomedId expression={ctx.text} />;
  }

  visitMws(): VisualExpressionType {
    return undefined;
  }

  visitWs(): VisualExpressionType {
    return undefined;
  }

  protected defaultResult(): VisualExpressionType {
    return <p>default</p>;
  }

}

function getExpressionContext(expression: string) {
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
