/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box, ListItem, Theme, Typography } from "@mui/material";
import { SystemStyleObject } from "@mui/system/styleFunctionSx";
import React, { ReactNode } from "react";

interface ConceptOptionProps {
  props: Record<string, unknown>;
  listItemStyles?: SystemStyleObject<Theme>;
  display: ReactNode;
  semanticTag: ReactNode;
}

export default function ConceptOption({
  props,
  listItemStyles = {},
  display,
  semanticTag,
}: ConceptOptionProps) {
  return (
    <ListItem
      {...props}
      sx={(theme) => ({
        "&.MuiListItem-root": {
          alignItems: "flex-start",
          [theme.breakpoints.down("sm")]: {
            paddingTop: "12px",
          },
        },
        ...listItemStyles,
      })}
    >
      <Typography sx={{ fontSize: "0.95em" }} flexGrow={1}>
        {display}
      </Typography>
      <Box
        sx={{
          marginLeft: 1,
          textAlign: "right",
          height: "1em",
          "& .MuiTypography-root": {
            lineHeight: "1.65em",
          },
          "& .MuiChip-root": {
            position: "relative",
            top: "-2px",
          },
        }}
      >
        {semanticTag ?? null}
      </Box>
    </ListItem>
  );
}
