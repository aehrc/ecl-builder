/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Autocomplete, TextField } from "@mui/material";
import React from "react";

interface Props {
  concept: Concept;
}

interface Concept {
  id: string;
  display?: string;
}

export default function ConceptReference({ concept }: Props) {
  return (
    <Autocomplete
      renderInput={(params) => (
        <TextField {...params} label="Search for a concept" />
      )}
      options={[]}
      value={concept}
      getOptionLabel={(concept) => concept.display || concept.id}
      isOptionEqualToValue={(a, b) => a.id === b.id}
    />
  );
}
