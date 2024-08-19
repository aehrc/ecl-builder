/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

/**
 * Takes a set of arrays, and interleaves them into a single array.
 */
export function interleave<T>(...inputs: T[][]): T[] {
  // Adapted from: https://stackoverflow.com/a/66037083/1760540
  return Array.from(
    {
      length: Math.max(...inputs.map((i) => i.length)),
    },
    (_, i) => inputs.reduce((acc, r) => (r[i] ? acc.concat(r[i]) : acc), []),
  ).flat();
}
