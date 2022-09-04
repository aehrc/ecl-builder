/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Typography } from "@mui/material";
import React from "react";
import ConceptOption from "./ConceptOption";
import { ConceptSearchOption } from "./ConceptReference";

export interface SuggestedConceptProps {
  props: Record<string, unknown>;
  option: ConceptSearchOption;
}

export default function SuggestedConcept({
  props,
  option,
}: SuggestedConceptProps) {
  const display = option.display ?? option.id,
    semanticTag = (
      <Typography
        flexShrink={0}
        variant="body2"
        sx={{
          fontStyle: "italic",
        }}
      >
        {option.semanticTag}
      </Typography>
    );
  return (
    <ConceptOption
      key={option.id}
      props={props as Record<string, unknown>}
      display={display}
      semanticTag={semanticTag}
    />
  );
}
