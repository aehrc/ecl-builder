/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Recognizer, Token } from "antlr4";

// noinspection JSUnusedGlobalSymbols
export default class ExpressionParserErrorListener {
  syntaxError(
    recognizer: Recognizer,
    offendingSymbol: Token,
    line: number,
    column: number,
    msg: string
  ) {
    throw new Error(`Syntax error at line ${line}, column ${column}: ${msg}`);
  }

  reportAmbiguity() {
    return null;
  }

  reportAttemptingFullContext() {
    return null;
  }

  reportContextSensitivity() {
    return null;
  }
}
