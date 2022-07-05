/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";
import React, { PropsWithChildren, ReactNode, useRef, useState } from "react";

export interface ExpressionGroupingProps extends PropsWithChildren {
  actions: Action[];
  className?: string;
  showAddButton?: boolean;
  sx?: SxProps<Theme>;
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

/**
 * Creates a set of styles that "stripes" nested expression groups to ensure adequate contrast.
 */
function getStripingStyle(levels: number): Record<string, any> {
  let style = {};
  for (let i = 0; i < levels; i++) {
    style = {
      ...style,
      [Array(i + 1)
        .fill(".expression-grouping")
        .join(" ") + " &"]: {
        backgroundColor: i % 2 === 0 ? "background.default" : "grey.100",
      },
    };
  }
  return style;
}

/**
 * A component that renders a grouped set of expressions in such a way that they can be discerned
 * from the surrounding expression content.
 */
export default function ExpressionGrouping({
  actions,
  children,
  className,
  showAddButton = true,
  sx,
}: ExpressionGroupingProps) {
  const stripingStyle = getStripingStyle(10),
    [menuOpen, setMenuOpen] = useState(false),
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
    <Box
      className={`expression-grouping${className ? ` ${className}` : ""}`}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: 2,
        borderWidth: 1,
        borderColor: "grey.400",
        borderStyle: "solid",
        borderRadius: 1,
        backgroundColor: "grey.100",
        position: "relative",
        pb: showAddButton ? "2.2em" : "1.4em",
        mb: "1em",
        ...stripingStyle,
        ...sx,
      }}
    >
      {children}
      {showAddButton && (
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
      )}
    </Box>
  );
}
