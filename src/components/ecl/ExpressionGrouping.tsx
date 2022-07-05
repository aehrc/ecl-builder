/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box, SxProps, Theme } from "@mui/material";
import React, { PropsWithChildren, ReactNode } from "react";
import GroupingActions, { Action } from "./GroupingActions";
import GroupingHeading from "./GroupingHeading";

export interface ExpressionGroupingProps extends PropsWithChildren {
  heading?: ReactNode;
  actions: Action[];
  showActions?: boolean;
  className?: string;
  sx?: SxProps<Theme>;
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
  heading,
  actions,
  children,
  className,
  showActions = true,
  sx,
}: ExpressionGroupingProps) {
  const stripingStyle = getStripingStyle(10);

  return (
    // We need this additional level of element to prevent margins being collapsed when used inside
    // flex box.
    <Box flexGrow={1}>
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
          mt: heading ? "1.75em" : undefined,
          mb: showActions ? "1.2em" : 0,
          pt: heading ? "3em" : undefined,
          pb: showActions ? "1.6em" : "1.4em",
          "& > *": {
            clear: "both",
          },
          ...stripingStyle,
          ...sx,
        }}
      >
        {heading && <GroupingHeading>{heading}</GroupingHeading>}
        {children}
        {showActions && <GroupingActions actions={actions} />}
      </Box>
    </Box>
  );
}
