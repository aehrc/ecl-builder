/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { createTheme } from "@mui/material";

const baseTheme = createTheme();
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
      styleOverrides: {
        root: {
          fontSize: "0.95em",
        },
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
          fontSize: "0.95em",
          gap: baseTheme.spacing(2),
          justifyContent: "space-between",
          "& .MuiListItemIcon-root": {
            minWidth: "unset",
            width: 4,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "0.9em",
        },
        head: {
          fontSize: "0.9em",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontSize: "0.95em",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          fontSize: "1.05em",
        },
      },
    },
  },
});
