/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";

export interface UpdateOptions {
  // Set this to true if the subject expression has optional whitespace on the right side.
  optionalWhiteSpaceRight?: boolean;
  // Set this to true if the subject expression has optional whitespace on the left side.
  optionalWhiteSpaceLeft?: boolean;
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
    if (this.onChange) {
      this.onChange(expression);
    }
  }

  /**
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then removes those characters.
   */
  remove(ctx: ParserRuleContext, options: UpdateOptions = {}): void {
    this.applyUpdates([ctx], "", options);
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
   */
  applyUpdates(
    ctxs: ParserRuleContext[],
    expression: string,
    {
      optionalWhiteSpaceRight = false,
      optionalWhiteSpaceLeft = false,
    }: UpdateOptions = {}
  ): void {
    if (this.onChange) {
      const newExpression = ctxs.reduce((acc, ctx) => {
        const start = ctx.start.start,
          stop = ctx.stop?.stop;
        if (stop !== undefined) {
          // If the prefix ends with whitespace, replace it with a single space.
          let prefix = acc.slice(0, start);
          if (/\s/.test(prefix[prefix.length - 1])) {
            prefix = prefix.trimEnd() + (optionalWhiteSpaceLeft ? "" : " ");
          }
          // If the suffix starts with whitespace, replace it with a single space.
          let suffix = acc.slice(stop + 1);
          if (/\s/.test(suffix[0])) {
            suffix = (optionalWhiteSpaceRight ? "" : " ") + suffix.trimStart();
          }
          return prefix + expression + suffix;
        } else {
          return acc;
        }
      }, this.expression);
      this.onChange(newExpression);
    }
  }
}
