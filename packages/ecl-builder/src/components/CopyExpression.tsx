/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ContentCopy } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export interface CopyExpressionProps {
  expression: string;
}

export default function CopyExpression({ expression }: CopyExpressionProps) {
  return (
    <CopyToClipboard text={expression}>
      <Button
        startIcon={<ContentCopy />}
        sx={{ whiteSpace: "nowrap" }}
        title="Copy the expression to the clipboard"
      >
        Copy ECL
      </Button>
    </CopyToClipboard>
  );
}
