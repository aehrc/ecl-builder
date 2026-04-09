/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ReactNode } from "react";
import { ParserRuleContext } from "antlr4";
import { ParseTreeVisitor } from "antlr4/tree/Tree";

export default class ECLVisitor extends ParseTreeVisitor {
  visit(ctx: ParserRuleContext): ReactNode;
  visitChildren(ctx: ParserRuleContext): ReactNode;
}
