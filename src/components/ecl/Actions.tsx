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

export interface ActionsProps extends PropsWithChildren {
  actions: Action[];
  icon: SvgIconComponent;
}

export type Action = ActionItem | ActionHeading;

export interface ActionItem {
  type: "item";
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface ActionHeading {
  type: "heading";
  label: string;
}

export default function Actions({ actions, icon }: ActionsProps) {
  const [menuOpen, setMenuOpen] = useState(false),
    addButton = useRef(null),
    numberOfItems = actions.filter((action) => action.type === "item").length,
    firstItem: ActionItem | undefined = actions.find(
      (action) => action.type === "item"
    ) as ActionItem,
    Icon = icon;

  function handleCloseMenu() {
    setMenuOpen(false);
  }

  function renderAction(options: Action, key: number) {
    if (options.type === "item") {
      const { label, icon, onClick } = options;
      return (
        <MenuItem key={key} onClick={onClick}>
          <ListItemText>{label}</ListItemText>
          <ListItemIcon>{icon}</ListItemIcon>
        </MenuItem>
      );
    } else if (options.type === "heading") {
      const { label } = options;
      return (
        <MenuItem key={key} disabled divider>
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
        sx={(theme) => ({
          alignSelf: "stretch",
          backgroundColor: theme.palette.grey[200],
        })}
        onClick={
          numberOfItems === 1
            ? (firstItem as ActionItem).onClick
            : () => setMenuOpen(true)
        }
      >
        <Icon fontSize="small" />
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
