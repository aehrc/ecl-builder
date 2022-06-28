/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  id: string;
  selectedId: string;
  children: ReactNode;
}

export default function TabPanel({ id, selectedId, children }: Props) {
  const selected = selectedId === id;

  return (
    <Box
      role="tabpanel"
      hidden={!selected}
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      sx={{ py: 2 }}
    >
      {selected && children}
    </Box>
  );
}
