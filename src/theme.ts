/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTabs: {
      defaultProps: {
        sx: {
          minHeight: 0,
        },
      },
    },
    MuiTab: {
      defaultProps: {
        iconPosition: "start",
        sx: { minHeight: 0 },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        disableAnimation: true,
      },
    },
  },
});
