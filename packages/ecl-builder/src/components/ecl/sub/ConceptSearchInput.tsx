/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { TextField } from "@mui/material";
import React from "react";
import { ConceptReferenceOptionType } from "./ConceptReference";

export interface ConceptSearchInputProps {
  props: Record<string, unknown>;
  selectedConcept?: ConceptReferenceOptionType;
  label: string;
}

export default function ConceptSearchInput({
  props,
  selectedConcept,
  label,
}: ConceptSearchInputProps) {
  const resolvedLabel =
    selectedConcept?.type === "ANY_CONCEPT"
      ? "*"
      : selectedConcept?.id ?? label;
  return (
    <TextField
      {...props}
      variant="filled"
      label={resolvedLabel}
      sx={(theme) => ({
        "& .MuiInputBase-root, & .MuiInputBase-root.MuiFilledInput-root.Mui-focused, & .MuiAutocomplete-inputFocused":
          {
            border: 0,
            borderRadius: 0,
            backgroundColor: theme.palette.background.paper,
            fontSize: "0.95rem",
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
            },
          },
        "& .MuiFilledInput-root::before": { border: 0 },
      })}
    />
  );
}
