/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { PushPin } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import React, { HTMLAttributes } from "react";
import { grey } from "../../../themes/color";
import ConceptOption from "./ConceptOption";

export interface AnyConcept {
  props: HTMLAttributes<HTMLLIElement>;
  separator: boolean;
}

export default function AnyConcept({ props, separator }: AnyConcept) {
  const theme = useTheme(),
    display = "any concept",
    semanticTag = (
      <PushPin
        sx={{
          fontSize: "1.2em",
          color: grey(theme, 5),
          position: "relative",
          top: "6px",
        }}
      />
    ),
    listItemStyles = separator
      ? {
          borderTopColor: grey(theme, 3),
          borderTopWidth: 1,
          borderTopStyle: "solid",
        }
      : {};
  return (
    <ConceptOption
      props={props as Record<string, unknown>}
      listItemStyles={listItemStyles}
      display={display}
      semanticTag={semanticTag}
    />
  );
}
