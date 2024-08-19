/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ParserRuleContext } from "antlr4";
import { TerminalNode } from "antlr4/tree/Tree";
import { PositionedFocusHandler } from "./BaseEclVisitor";
import { ChangeHandler } from "./ExpressionVisitor";

export interface UpdateOptions {
  // Set this to true if the subject expression has optional whitespace on the right side that needs
  // to be collapsed, e.g. when removing the sub-expression.
  collapseWhiteSpaceRight?: boolean;
  // Set this to true if the subject expression has optional whitespace on the left side that needs
  // to be collapsed, e.g. when removing the sub-expression.
  collapseWhiteSpaceLeft?: boolean;
  // Set this to true to ensure a whitespace remains to the left side of the first span of the
  // subject expression
  preserveFirstWhiteSpace?: boolean;
  // Set this to true to notify of change in focus, along with the position of the focus within the
  // expression.
  reportFocusUpdate?: boolean;
  // Sets the strategy for handling focus updates.
  focusUpdateStrategy?: FocusUpdateStrategy;
  // A position to update the focus to, if using the "SPECIFIED_POSITION" strategy.
  focusPosition?: number;
}

// Represents a span of characters within an expression.
export interface Span {
  start: number;
  stop: number;
  expression: string;
}

// Describes a strategy of updating the focus position following an update to the expression.
export type FocusUpdateStrategy =
  | "START_OF_UPDATE"
  | "END_OF_UPDATE"
  | "BEFORE_UPDATE"
  | "AFTER_UPDATE"
  | "SPECIFIED_POSITION";

/**
 * This class knows how to transform an expression in a variety of different ways, including
 * replacing, removing, prepending and appending using new expressions ANTLR parser contexts as
 * inputs.
 */
export default class ExpressionTransformer {
  readonly expression: string;
  readonly onChange: ChangeHandler;
  readonly onFocus?: PositionedFocusHandler;

  constructor(
    expression: string,
    onChange: ChangeHandler,
    onFocus?: PositionedFocusHandler,
  ) {
    this.expression = expression;
    this.onChange = onChange;
    this.onFocus = onFocus;
  }

  /**
   * Prepends a new expression to the start of the existing expression, separated by a space.
   */
  prependToSpan(
    span: Span,
    expression: string,
    parenthesize: boolean,
    preParenthesize: boolean,
    options: UpdateOptions = {},
  ): void {
    const prevExpression = span.expression.trimStart(),
      suffix = preParenthesize ? `(${prevExpression})` : prevExpression,
      newExpression = expression + " " + suffix,
      parenthesizedExpression = parenthesize
        ? `(${newExpression})`
        : newExpression;
    this.applyUpdateToSpan(span, parenthesizedExpression, options);
  }

  /**
   * Appends a new expression to the end of the existing expression, separated by a space.
   */
  append(
    ctx: ParserRuleContext,
    expression: string,
    parenthesize: boolean,
    preParenthesize: boolean,
    options: UpdateOptions = {},
  ): void {
    this.appendToSpan(
      this.spanFromContext(ctx),
      expression,
      parenthesize,
      preParenthesize,
      options,
    );
  }

  /**
   * Appends a new expression to the end of the existing expression, separated by a space.
   */
  appendToSpan(
    span: Span,
    expression: string,
    parenthesize: boolean,
    preParenthesize: boolean,
    options: UpdateOptions = {},
  ): void {
    const prevExpression = span.expression.trimEnd(),
      prefix = (preParenthesize ? `(${prevExpression})` : prevExpression) + " ",
      newExpression = prefix + expression,
      parenthesizedExpression = parenthesize
        ? `(${newExpression})`
        : newExpression;
    this.applyUpdateToSpan(span, parenthesizedExpression, {
      ...options,
      focusPosition:
        options.focusUpdateStrategy === "SPECIFIED_POSITION" &&
        options.focusPosition
          ? prefix.length +
            options.focusPosition +
            (preParenthesize ? 1 : 0) +
            (parenthesize ? 1 : 0)
          : options.focusPosition,
    });
  }

  /**
   * Replaces the entire expression.
   */
  replace(expression: string): void {
    this.onChange(expression);
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
  removeAll(
    ctxs: ParserRuleContext[],
    options: UpdateOptions = { focusUpdateStrategy: "BEFORE_UPDATE" },
  ): void {
    this.applyUpdates(ctxs, "", options);
  }

  /**
   * Uses the parser rule context to identify the range of characters within a set of expressions,
   * and then removes those characters.
   */
  removeAllSpans(
    spans: Span[],
    options: UpdateOptions = { focusUpdateStrategy: "BEFORE_UPDATE" },
  ): void {
    this.applyUpdatesToSpans(spans, "", options);
  }

  /**
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then substitutes those characters with the expression reported by the
   * component.
   */
  applyUpdate(
    ctx: ParserRuleContext,
    expression: string,
    options: UpdateOptions = {},
  ): void {
    this.applyUpdates([ctx], expression, options);
  }

  /**
   * Uses the parser rule context to identify the range of characters within the expression that
   * have changed, and then substitutes those characters with the expression reported by the
   * component.
   */
  applyUpdateToSpan(
    span: Span,
    expression: string,
    options: UpdateOptions = {},
  ): void {
    this.applyUpdatesToSpans([span], expression, options);
  }

  /**
   * Uses the parser rule context to identify a number of ranges of characters within the expression
   * that have changed, and then substitutes those characters with the expression reported by the
   * component.
   */
  applyUpdates(
    ctxs: ParserRuleContext[],
    replacement: string,
    options: UpdateOptions = {},
  ): void {
    this.applyUpdatesToSpans(
      ctxs.map((ctx) => this.spanFromContext(ctx)),
      replacement,
      options,
    );
  }

  /**
   * Performs the same function as `handleUpdate`, except that it can replace multiple
   * subexpressions with the same new expression.
   *
   * @param spans The spans to update. Must be sorted in the order that they occur within the
   * expression.
   * @param replacement The expression that will be used to update the parts of the larger
   * expression described by the array of spans.
   */
  applyUpdatesToSpans(
    spans: Span[],
    replacement: string,
    {
      collapseWhiteSpaceRight = false,
      collapseWhiteSpaceLeft = false,
      preserveFirstWhiteSpace = !collapseWhiteSpaceLeft,
      reportFocusUpdate = true,
      focusUpdateStrategy = "START_OF_UPDATE",
      focusPosition,
    }: UpdateOptions = {},
  ): void {
    let cursor = 0,
      startOfUpdate: number | undefined,
      endOfUpdate: number | undefined,
      beforeUpdate: number | undefined,
      afterUpdate: number | undefined;

    // Go through each of the contexts and add two things to an array:
    // - The slice since the start of the expression, or since the last context, and;
    // - The replacement expression.
    const newExpressionParts = spans.reduce((acc: string[], span, idx) => {
      const start = span.start,
        stop = span.stop;

      // Conditionally modify the whitespace at the leading edge of the prefix expression.
      let prefix = this.expression.slice(cursor, start);
      if (cursor > 0 && /\s/.test(prefix[0])) {
        prefix = (collapseWhiteSpaceRight ? "" : " ") + prefix.trimStart();
      }

      // Conditionally modify the whitespace at the trailing edge of the prefix expression.
      if (/\s/.test(prefix[prefix.length - 1])) {
        // For the first subject span, check if first white space needs to be preserved.
        let spanCollapseWhiteSpaceLeft = idx
          ? collapseWhiteSpaceLeft
          : !preserveFirstWhiteSpace;
        prefix = prefix.trimEnd() + (spanCollapseWhiteSpaceLeft ? "" : " ");
      }

      cursor = stop + 1;
      if (beforeUpdate === undefined) {
        // On the first update, record the position of the character before the update within the
        // final expression.
        beforeUpdate = Math.max(0, prefix.length - 1);
      }
      if (startOfUpdate === undefined) {
        // On the first update, record the position of the first updated character within the final
        // expression.
        startOfUpdate = prefix.length;
      }

      // After each update, move the after update position to one character beyond the span of
      // updated characters.
      afterUpdate =
        afterUpdate === undefined
          ? prefix.length + replacement.length
          : afterUpdate + prefix.length + replacement.length;
      endOfUpdate = afterUpdate - 1;
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

    // Report a changed expression, based on the concatenation of the accumulated parts.
    const newExpression = newExpressionParts.join("");
    this.onChange(newExpression);

    // Work out the right focus position to report, based upon the strategy.
    if (reportFocusUpdate && spans.length > 0) {
      let position: number | undefined;
      if (
        focusUpdateStrategy === "SPECIFIED_POSITION" &&
        startOfUpdate !== undefined &&
        focusPosition !== undefined
      ) {
        position = startOfUpdate + focusPosition;
      } else if (
        focusUpdateStrategy === "BEFORE_UPDATE" &&
        beforeUpdate !== undefined
      ) {
        position = beforeUpdate;
      } else if (
        focusUpdateStrategy === "AFTER_UPDATE" &&
        afterUpdate !== undefined
      ) {
        position = Math.min(afterUpdate, newExpression.length - 1);
      } else if (
        focusUpdateStrategy === "START_OF_UPDATE" &&
        startOfUpdate !== undefined
      ) {
        position = startOfUpdate;
      } else if (
        focusUpdateStrategy === "END_OF_UPDATE" &&
        endOfUpdate !== undefined
      ) {
        position = endOfUpdate;
      }
      if (position !== undefined && this.onFocus) {
        this.onFocus(position);
      }
    }
  }

  spanFromContext(ctx: ParserRuleContext): Span {
    return {
      start: ctx.start.start,
      stop: ctx.stop.stop,
      expression: ctx.getText(),
    };
  }

  spanFromTerminalNode(node: TerminalNode): Span {
    return {
      start: node.symbol.start,
      stop: node.symbol.stop,
      expression: node.getText(),
    };
  }

  spanFromIndices(start: number, stop: number): Span {
    return {
      start: start,
      stop: stop,
      expression: this.expression.substring(start, stop + 1),
    };
  }

  /**
   * For an expression containing any number of binary expressions (e.g. [SUBJECT] [OPERATOR]
   * [SUBJECT] [OPERATOR] [SUBJECT]), this method can tell the set expressions should be removed
   * when a nominated expression is removed, in order to retain validity.
   */
  getBinaryOperatorRemovalContext(
    ctxs: ParserRuleContext[],
    subjectIndex: number,
  ): Span[] {
    const removalContext: ParserRuleContext[] = [];
    for (let currentIndex = 0; currentIndex < ctxs.length; currentIndex++) {
      if (subjectIndex === currentIndex) {
        // Always include the subject context itself in the removal context.
        removalContext.push(ctxs[currentIndex]);
      } else if (
        subjectIndex === ctxs.length - 1 &&
        (subjectIndex + 1) % 2 === 1 &&
        currentIndex === subjectIndex - 1
      ) {
        // If this is a subject context that is the last child, include the previous logical
        // operator in the removal context.
        removalContext.push(ctxs[currentIndex]);
      } else if (
        (subjectIndex + 1) % 2 === 1 &&
        currentIndex === subjectIndex + 1
      ) {
        // If this is a subject context, include the next logical operator in the removal
        // context.
        removalContext.push(ctxs[currentIndex]);
      }
    }
    return removalContext.map(this.spanFromContext);
  }
}
