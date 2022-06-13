/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Typography } from "@mui/material";
import React from "react";

interface Props {
  expression: string;
}

export default function SnomedId({ expression }: Props) {
  return <Typography variant="body2">{expression}</Typography>;
}