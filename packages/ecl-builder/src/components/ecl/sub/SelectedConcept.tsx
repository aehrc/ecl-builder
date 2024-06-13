/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Chip, Stack, Typography, useTheme } from "@mui/material";
import React, { HTMLAttributes } from "react";
import { grey } from "../../../themes/color";
import ConceptOption from "./ConceptOption";
import { AnyConceptOption, ConceptSearchOption } from "./ConceptReference";

export interface SelectedConceptProps {
  props: HTMLAttributes<HTMLLIElement>;
  option: ConceptSearchOption | AnyConceptOption;
  separator: boolean;
}

export default function SelectedConcept({
  props,
  option,
  separator,
}: SelectedConceptProps) {
  const theme = useTheme(),
    display =
      option.type === "ANY_CONCEPT"
        ? "any concept"
        : option.display ?? option.id,
    semanticTag = (
      <Stack direction="row" spacing={1}>
        <Chip label="selected" size="small" sx={{ mr: 0 }} />
        {option.type === "SPECIFIC_CONCEPT" && option.semanticTag ? (
          <Typography
            variant="body2"
            sx={{
              fontStyle: "italic",
            }}
          >
            {option.semanticTag}
          </Typography>
        ) : null}
      </Stack>
    ),
    listItemStyles = {
      "&.MuiAutocomplete-option": { 
        pr: option.type === "SPECIFIC_CONCEPT" && option.semanticTag ? 2 : 1 
      },
      ...(separator
        ? {
            borderBottomColor: grey(theme, 3),
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
          }
        : {}),
    };
  return (
    <ConceptOption
      props={props as Record<string, unknown>}
      listItemStyles={listItemStyles}
      display={display}
      semanticTag={semanticTag}
    />
  );
}
