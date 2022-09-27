/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { Stack } from "@mui/material";
import React from "react";
import InlineExpressionGrouping from "../InlineExpressionGrouping";

export const MEMBER_OF_OPERATOR = "^";

export default function MemberOfOperator() {
  return (
    <Stack className="member-of-operator" direction="row">
      <InlineExpressionGrouping>member of</InlineExpressionGrouping>
    </Stack>
  );
}
