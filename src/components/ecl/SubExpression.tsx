/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Add } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Stack } from "@mui/material";
import React, { PropsWithChildren, useRef, useState } from "react";
import ConstraintOperator from "./ConstraintOperator";
import { ChangeReporterProps } from "./ExpressionVisitor";

export interface SubExpressionProps
  extends PropsWithChildren,
    ChangeReporterProps {
  // The currently selected constraint type.
  constraint?: any;
}

/**
 * A component for rendering a sub-expression, which is basically a concept plus constraints,
 * additions and refinements.
 *
 * @author John Grimes
 */
export default function SubExpression({
  constraint,
  onChange,
  children,
}: SubExpressionProps) {
  const addButton = useRef<HTMLButtonElement | null>(null),
    [menuOpen, setMenuOpen] = useState(false);

  function handleClickAttributeFilter() {
    setMenuOpen(false);
  }

  return (
    <Stack
      className="sub-expression"
      direction="row"
      alignItems="flex-start"
      alignSelf="stretch"
      flexGrow={1}
    >
      {constraint ? null : <ConstraintOperator onChange={onChange} />}
      {children}
      <IconButton
        ref={addButton}
        color="primary"
        sx={{ alignSelf: "center", marginRight: -1 }}
        onClick={() => setMenuOpen(true)}
      >
        <Add />
      </IconButton>
      <Menu open={menuOpen} anchorEl={addButton.current}>
        <MenuItem onClick={handleClickAttributeFilter}>
          Attribute filter
        </MenuItem>
      </Menu>
    </Stack>
  );
}
