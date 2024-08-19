/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

/**
 * Formats a number with no fraction digits, and with grouping.
 *
 * @param number the number to be formatted
 * @param removeFraction whether to remove the fraction component of the number
 */
export function formatNumber(
  number?: number,
  removeFraction = false,
): string | undefined {
  const options = {
    useGrouping: true,
    maximumFractionDigits: removeFraction ? 0 : 5,
  };
  return number !== undefined
    ? Intl.NumberFormat("en", options).format(number)
    : undefined;
}
