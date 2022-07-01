/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { createTheme } from "@mui/material";

let baseTheme = createTheme();
export const theme = createTheme(baseTheme, {
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: baseTheme.palette.background.paper,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        disableAnimation: true,
      },
      // styleOverrides: {
      //   root: {
      //     backgroundColor: baseTheme.palette.background.paper,
      //   },
      // },
    },
  },
});
