/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import React, { ReactNode, useRef, useState } from "react";

export interface GroupingActionsProps {
  actions: Action[];
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

export default function GroupingActions({ actions }: GroupingActionsProps) {
  const [menuOpen, setMenuOpen] = useState(false),
    addButton = useRef<HTMLButtonElement>(null),
    numberOfItems = actions.filter((action) => action.type === "item").length,
    firstItem: ActionItem | undefined = actions.find(
      (action) => action.type === "item"
    ) as ActionItem;

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
    <Stack spacing={1} direction="row">
      <Button
        variant="contained"
        startIcon={<Add />}
        sx={{
          position: "absolute",
          bottom: "-2.5em",
          marginBottom: "1.2em",
          backgroundColor: "background.default",
          color: "text.primary",
          "&:hover": {
            color: "primary.contrastText",
          },
          flexGrow: 1,
        }}
        ref={addButton}
        onClick={
          numberOfItems === 1
            ? (firstItem as ActionItem).onClick
            : () => setMenuOpen(true)
        }
      >
        {numberOfItems === 1 ? firstItem.label : "Add"}
      </Button>
      {numberOfItems > 1 ? (
        <Menu
          open={menuOpen}
          anchorEl={addButton.current}
          onClose={handleCloseMenu}
          onClick={handleCloseMenu}
        >
          {actions.map(renderAction)}
        </Menu>
      ) : null}
    </Stack>
  );
}
