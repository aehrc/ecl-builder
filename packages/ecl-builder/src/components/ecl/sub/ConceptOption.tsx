/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box, ListItem, SxProps, Theme, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface ConceptOptionProps {
  props: Record<string, unknown>;
  listItemStyles?: SxProps<Theme>;
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
    <ListItem {...props} sx={listItemStyles}>
      <Typography sx={{ fontSize: "0.95em" }} flexGrow={1}>
        {display}
      </Typography>
      <Box
        sx={{
          marginLeft: 1,
          lineHeight: 1.83,
          alignSelf: "flex-start",
          textAlign: "right",
        }}
      >
        {semanticTag ?? null}
      </Box>
    </ListItem>
  );
}
