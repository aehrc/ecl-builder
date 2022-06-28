/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Autocomplete, TextField } from "@mui/material";
import React from "react";

interface Props {
  conceptId: string;
  term?: string;
}

export default function ConceptReference({ conceptId, term }: Props) {
  return (
    <Autocomplete
      renderInput={(params) => (
        <TextField {...params} label="Search for a concept" />
      )}
      options={[]}
      value={term}
    />
  );
}
