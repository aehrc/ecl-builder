/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { SvgIconComponent } from "@mui/icons-material";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { PropsWithChildren, ReactNode, useRef, useState } from "react";
import { grey } from "../../themes/color";

export interface ActionsProps extends PropsWithChildren {
  actions: Action[];
  icon?: SvgIconComponent;
  title: string;
}

export type Action = ActionItem | ActionHeading;

export interface ActionItem {
  type: "item";
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export interface ActionHeading {
  type: "heading";
  label: string;
}

function isActionItem(action: Action): action is ActionItem {
  return action.type === "item";
}

export default function Actions({
  actions,
  icon,
  title,
  children,
}: ActionsProps) {
  const [menuOpen, setMenuOpen] = useState(false),
    addButton = useRef(null),
    actionItems = actions.filter(isActionItem),
    numberOfItems = actionItems.length,
    Icon = icon;

  if (numberOfItems === 0) {
    return null;
  }

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  function renderAction(options: Action, key: number) {
    if (options.type === "item") {
      const { label, icon, disabled, onClick } = options;
      return (
        <MenuItem key={key} onClick={onClick} disabled={disabled}>
          <ListItemText>{label}</ListItemText>
          <ListItemIcon>{icon}</ListItemIcon>
        </MenuItem>
      );
    } else if (options.type === "heading") {
      const { label } = options;
      return (
        <MenuItem
          key={key}
          disabled
          divider
          sx={{
            "&.Mui-disabled": {
              opacity: 1,
              "& .MuiTypography-root": {
                fontWeight: "700",
              },
            },
          }}
        >
          <ListItemText>{label}</ListItemText>
        </MenuItem>
      );
    } else {
      throw new Error("Invalid option type");
    }
  }

  return (
    <>
      <IconButton
        className="actions"
        ref={addButton}
        title={title}
        sx={(theme) => ({
          alignSelf: "stretch",
          backgroundColor: menuOpen
            ? theme.palette.primary.main
            : grey(theme, 1),
          borderRadius: 0,
          color: menuOpen ? theme.palette.primary.contrastText : "inherit",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
          "&:focus": {
            color: theme.palette.primary.main,
          },
          "& > .MuiTypography-root:hover": {
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
        })}
        onClick={
          numberOfItems === 1 ? actionItems[0].onClick : () => setMenuOpen(true)
        }
      >
        {children ?? (Icon ? <Icon fontSize="small" /> : null)}
      </IconButton>
      {numberOfItems > 1 ? (
        <Menu
          open={menuOpen}
          anchorEl={addButton.current}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          onClose={handleCloseMenu}
          onClick={handleCloseMenu}
        >
          {actions.map(renderAction)}
        </Menu>
      ) : null}
    </>
  );
}
