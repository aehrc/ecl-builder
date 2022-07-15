/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React, { PropsWithChildren, useContext } from "react";
import RenderingContext from "./RenderingContext";

export default function Attribute({ children }: PropsWithChildren) {
  const renderingContext = useContext(RenderingContext);

  return (
    <RenderingContext.Provider
      value={{ ...renderingContext, insideEclAttribute: true }}
    >
      <Stack className="attribute" direction="row">
        {children}
      </Stack>
    </RenderingContext.Provider>
  );
}
