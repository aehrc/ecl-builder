/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { createTheme } from "@mui/material";

const baseTheme = createTheme({ typography: { fontSize: 13 } });
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
    },
    MuiAutocomplete: {
      styleOverrides: {
        option: {
          alignItems: "flex-start",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          gap: baseTheme.spacing(2),
          justifyContent: "space-between",
          "& .MuiListItemIcon-root": {
            minWidth: "unset",
            width: 24,
          },
        },
      },
    },
  },
});
