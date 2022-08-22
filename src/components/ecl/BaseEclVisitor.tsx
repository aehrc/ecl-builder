/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import { cloneElement, isValidElement } from "react";
import * as uuid from "uuid";
import ECLVisitor from "../../parser/src/grammar/syntax/ECLVisitor";
import ExpressionTransformer from "./ExpressionTransformer";
import { VisualExpressionType } from "./ExpressionVisitor";

export default class BaseEclVisitor extends ECLVisitor {
  readonly transformer: ExpressionTransformer;

  constructor(transformer: ExpressionTransformer) {
    super();
    this.transformer = transformer;
  }

  visit(ctx: ParserRuleContext): VisualExpressionType {
    return super.visit(ctx);
  }

  visitChildren(ctx: ParserRuleContext): VisualExpressionType {
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

  protected defaultResult(): never {
    throw new Error(
      "ExpressionVisitor: visitation fell through to default result"
    );
  }
}
