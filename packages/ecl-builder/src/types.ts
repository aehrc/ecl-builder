/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

export interface ExpressionDiagnostic {
  /** Matches CoreDiagnosticSeverity from `\@aehrc/ecl-core`. */
  severity: "error" | "warning" | "information" | "hint";
  message: string;
}

/**
 *
 * @param value
 */
export function nonNullish<T>(value: T | null | undefined): value is T {
  return !!value;
}
