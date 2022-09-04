/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Chip, useTheme } from "@mui/material";
import React from "react";
import { grey } from "../../../themes/color";
import ConceptOption from "./ConceptOption";
import { AnyConceptOption, ConceptSearchOption } from "./ConceptReference";

export interface SelectedConceptProps {
  props: Record<string, unknown>;
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
    semanticTag = <Chip label="selected" size="small" sx={{ mr: 0 }} />,
    listItemStyles = {
      "&.MuiAutocomplete-option": { pr: 1 },
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
      key={option.type === "ANY_CONCEPT" ? option.type : option.id}
      props={props as Record<string, unknown>}
      listItemStyles={listItemStyles}
      display={display}
      semanticTag={semanticTag}
    />
  );
}
