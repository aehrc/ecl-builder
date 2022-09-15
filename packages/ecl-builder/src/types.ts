/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

export function nonNullish<T>(
  value: T | null | undefined
): value is T {
  return !!value;
}
