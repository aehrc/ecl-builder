/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";
import ComponentLabel from "./ComponentLabel";
import HorizontalLink from "./HorizontalLink";

export default function ExpressionComparisonOperator() {
  const horizontalLinkStyle = { marginTop: "1.85em", alignSelf: "flex-start" };

  return (
    <>
      <HorizontalLink style={horizontalLinkStyle} />
      <ComponentLabel
        sx={{
          alignSelf: "flex-start",
          borderWidth: 1,
          borderColor: "grey.400",
          borderStyle: "solid",
          borderRadius: 1,
        }}
      >
        is equal to
      </ComponentLabel>
      <HorizontalLink style={horizontalLinkStyle} />
    </>
  );
}
