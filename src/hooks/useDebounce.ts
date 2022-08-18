/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { useEffect, useState } from "react";

/**
 * A hook for implementing debounce on a string value.
 *
 * Inspired by: https://dev.to/arnonate/debouncing-react-query-with-hooks-2ek6
 */
export default function useDebounce(value: string, delay = 250) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
