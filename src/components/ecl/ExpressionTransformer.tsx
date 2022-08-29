/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";

export interface UpdateOptions {
  // Set this to true if the subject expression has optional whitespace on the right side that needs
  // to be collapsed, e.g. when removing the sub-expression.
  collapseWhiteSpaceRight?: boolean;
  // Set this to true if the subject expression has optional whitespace on the left side that needs
  // to be collapsed, e.g. when removing the sub-expression.
  collapseWhiteSpaceLeft?: boolean;
}

export interface SupplementOptions extends UpdateOptions {
  // Set this to true to parenthesize the original expression.
  parenthesize?: boolean;
}

/**
 * This class knows how to transform an expression in a variety of different ways, including
 * replacing, removing, prepending and appending using new expressions ANTLR parser contexts as
 * inputs.
 */
export default class ExpressionTransformer {
  readonly expression: string;
  readonly onChange: (expression: string) => unknown;

  constructor(expression: string, onChange: (expression: string) => unknown) {
    this.expression = expression;
    this.onChange = onChange;
  }

  handleChange(expression: string): void {
    this.onChange(expression);
  }

  /**
   * Prepends a new expression to the start of the existing expression, separated by a space.
   */
  prepend(
    ctx: ParserRuleContext,
    expression: string,
    { parenthesize = false }: SupplementOptions = {}
  ): void {
    const suffix = ctx.getText().trimStart(),
      newExpression = expression + " " + suffix,
      parenthesizedExpression = parenthesize
        ? `(${newExpression})`
        : newExpression;
    this.applyUpdate(ctx, parenthesizedExpression);
  }

  /**
   * Appends a new expression to the end of the existing expression, separated by a space.
   */
  append(
    ctx: ParserRuleContext,
    expression: string,
    { parenthesize = false }: SupplementOptions = {}
  ): void {
    const prefix = ctx.getText().trimEnd(),
      newExpression = prefix + " " + expression,
      parenthesizedExpression = parenthesize
        ? `(${newExpression})`
        : newExpression;
    this.applyUpdate(ctx, parenthesizedExpression);
  }

  /**
   * Replaces the entire expression.
   */
  replace(expression: string): void {
    this.handleChange(expression);
  }

  /**
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then removes those characters.
   */
  remove(ctx: ParserRuleContext, options: UpdateOptions = {}): void {
    this.removeAll([ctx], options);
  }

  /**
   * Uses the parser rule context to identify the range of characters within a set of expressions,
   * and then removes those characters.
   */
  removeAll(ctxs: ParserRuleContext[], options: UpdateOptions = {}): void {
    this.applyUpdates(ctxs, "", options);
  }

  /**
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then substitutes those characters with the expression reported by the
   * component.
   */
  applyUpdate(
    ctx: ParserRuleContext,
    expression: string,
    options: UpdateOptions = {}
  ): void {
    this.applyUpdates([ctx], expression, options);
  }

  /**
   * Performs the same function as `handleUpdate`, except that it can replace multiple
   * subexpressions with the same new expression.
   *
   * @param ctxs The parser rule contexts to update. Must be sorted in the order that they occur
   * within the expression.
   * @param replacement The expression that will be used to update the parts of the larger
   * expression described by the array of contexts.
   */
  applyUpdates(
    ctxs: ParserRuleContext[],
    replacement: string,
    {
      collapseWhiteSpaceRight = false,
      collapseWhiteSpaceLeft = false,
    }: UpdateOptions = {}
  ): void {
    let cursor = 0;
    // Go through each of the contexts and add two things to an array:
    // - The slice since the start of the expression, or since the last context, and;
    // - The replacement expression.
    const newExpressionParts = ctxs.reduce((acc: string[], ctx) => {
      const start = ctx.start.start,
        stop = ctx.stop.stop;
      // Conditionally modify the whitespace at the leading edge of the prefix expression.
      let prefix = this.expression.slice(cursor, start);
      if (cursor > 0 && /\s/.test(prefix[0])) {
        prefix = (collapseWhiteSpaceRight ? "" : " ") + prefix.trimStart();
      }
      // Conditionally modify the whitespace at the trailing edge of the prefix expression.
      if (/\s/.test(prefix[prefix.length - 1])) {
        prefix = prefix.trimEnd() + (collapseWhiteSpaceLeft ? "" : " ");
      }
      cursor = stop + 1;
      return acc.concat(prefix, replacement);
    }, []);
    // Once all the contexts have been processed, add the slice from the end of the last context
    // to the end of the expression.
    if (cursor < this.expression.length) {
      // Conditionally modify the whitespace at the leading edge of the suffix expression.
      let suffix = this.expression.slice(cursor);
      if (/\s/.test(suffix[0])) {
        suffix = (collapseWhiteSpaceRight ? "" : " ") + suffix.trimStart();
      }
      newExpressionParts.push(suffix);
    }
    this.handleChange(newExpressionParts.join(""));
  }
}
