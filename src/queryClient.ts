/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { QueryClient } from "@tanstack/react-query";

export const DEFAULT_QUERY_OPTIONS = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    keepPreviousData: true,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: DEFAULT_QUERY_OPTIONS,
});
