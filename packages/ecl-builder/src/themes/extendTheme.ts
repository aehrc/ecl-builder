/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { createTheme, Theme } from "@mui/material";
import { grey } from "./color";

export function extendTheme(theme: Theme): Theme {
  return createTheme(theme, {
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
            backgroundColor: theme.palette.background.paper,
          },
          notchedOutline: {
            borderColor: grey(theme, 4),
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
          root: {
            minWidth: "240px",
          },
          option: {
            alignItems: "flex-start",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontSize: "0.95em",
            gap: theme.spacing(2),
            justifyContent: "space-between",
            "& .MuiListItemIcon-root": {
              minWidth: "unset",
              width: "16px",
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
      MuiSelect: {
        defaultProps: {
          variant: "filled",
        },
        styleOverrides: {
          root: {
            border: 0,
            borderRadius: 0,
            backgroundColor: theme.palette.background.paper,
            overflow: "hidden",
            "&::before": { border: 0 },
            "&.Mui-focused": {
              backgroundColor: theme.palette.background.paper,
            },
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
            },
          },
          select: {
            height: "39px",
            lineHeight: "39px",
            paddingTop: theme.spacing(1),
            "&:focus": {
              backgroundColor: theme.palette.background.paper,
            },
          },
        },
      },
    },
  });
}
