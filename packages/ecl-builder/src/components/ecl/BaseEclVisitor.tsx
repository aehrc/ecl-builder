/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import { cloneElement, isValidElement } from "react";
import * as uuid from "uuid";
import ECLVisitor from "../../parser/src/grammar/syntax/ECLVisitor";
import ExpressionTransformer, { Span } from "./ExpressionTransformer";
import { VisualExpressionType } from "./ExpressionVisitor";

// Reports an update to the focus, along with a position within the current expression.
export type PositionedFocusHandler = (position?: number) => unknown;

export interface BaseEclVisitorOptions {
  // A transformer that is used to transform the expression in response to updates.
  transformer: ExpressionTransformer;
  // The current context within the expression that is the focus of user input.
  focusPosition?: number;
  // A set of spans that is the current context for removal.
  removalContext: Span[];
  // Set to the context of the current refinement.
  refinement: boolean;
  // Set to the context of the current compound expression.
  compound: boolean;
  // Set to true if the current context is within an attribute grouping.
  attributeGrouping: boolean;
  // Called when the focus position changes.
  onFocus?: PositionedFocusHandler;
}

/**
 * The base class from which all other visitors are derived.
 *
 * @author John Grimes
 */
export default class BaseEclVisitor extends ECLVisitor {
  readonly transformer: ExpressionTransformer;
  readonly options: BaseEclVisitorOptions;

  constructor(options: BaseEclVisitorOptions) {
    super();
    this.transformer = options.transformer;
    this.options = options;
  }

  visitChildren(ctx: ParserRuleContext): VisualExpressionType {
    const children = super.visitChildren(ctx);
    if (Array.isArray(children)) {
      return this.addKeys(children);
    } else {
      return children;
    }
  }

  /**
   * This adds a unique key to each child element, to satisfy the requirement of React that all
   * elements in a list must have a unique key prop.
   *
   * @see https://reactjs.org/docs/lists-and-keys.html#keys
   */
  addKeys(ctxs: VisualExpressionType[]): VisualExpressionType[] {
    return ctxs.map((child) =>
      isValidElement(child) ? cloneElement(child, { key: uuid.v4() }) : child
    );
  }
}
