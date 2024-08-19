/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ContentCopy } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export interface CopyValueSetProps {
  expression: string;
}

export default function CopyValueSet({ expression }: CopyValueSetProps) {
  const valueSetUri = useMemo(
    () =>
      `http://snomed.info/sct?fhir_vs=ecl/${encodeURIComponent(expression)}`,
    [expression],
  );
  return (
    <CopyToClipboard text={valueSetUri}>
      <Button
        startIcon={<ContentCopy />}
        sx={{ whiteSpace: "nowrap" }}
        title="Copy the FHIR ValueSet URI to the clipboard"
      >
        Copy URI
      </Button>
    </CopyToClipboard>
  );
}
