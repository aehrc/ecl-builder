/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Recognizer, Token } from "antlr4";
import { ErrorListener } from "antlr4/error";

// noinspection JSUnusedGlobalSymbols
export default class ExpressionParserErrorListener implements ErrorListener {
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
