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
import React, {
  PropsWithChildren,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { grey } from "../../themes/color";
import { StyleForwardingProps } from "./ExpressionVisitor";

export interface ActionsProps extends PropsWithChildren, StyleForwardingProps {
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

/**
 *
 * @param root0
 * @param root0.actions
 * @param root0.icon
 * @param root0.title
 * @param root0.sx
 * @param root0.children
 */
export default function Actions({
  actions,
  icon,
  title,
  sx,
  children,
}: ActionsProps) {
  const [menuOpen, setMenuOpen] = useState(false),
    [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null),
    addButtonRef = useCallback(
      (node: HTMLElement | null) => {
        setAnchorEl(node);
      },
      [setAnchorEl],
    ),
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
        <MenuItem
          key={key}
          onClick={onClick}
          disabled={disabled}
          sx={{ textAlign: "left" }}
        >
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
            textAlign: "left",
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
        ref={addButtonRef}
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
          ...sx,
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
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          container={anchorEl}
          onClose={handleCloseMenu}
          onClick={handleCloseMenu}
        >
          {actions.map(renderAction)}
        </Menu>
      ) : null}
    </>
  );
}
