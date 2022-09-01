/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Switch } from "@mui/material";
import React from "react";

export interface IncludeInactivesProps {
  checked?: boolean;
  onChange?: (checked: boolean) => unknown;
}

export default function IncludeInactives({
  checked,
  onChange,
}: IncludeInactivesProps) {
  return (
    <Switch
      size="small"
      checked={checked}
      onChange={(e) => {
        if (onChange) {
          return onChange(e.target.checked);
        }
      }}
    />
  );
}
