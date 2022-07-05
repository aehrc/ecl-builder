/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";
import ComponentLabel from "./ComponentLabel";
import HorizontalLink from "./HorizontalLink";

export default function ExpressionComparisonOperator() {
  return (
    <>
      <HorizontalLink />
      <ComponentLabel sx={{ alignSelf: "center" }}>is equal to</ComponentLabel>
      <HorizontalLink />
    </>
  );
}
