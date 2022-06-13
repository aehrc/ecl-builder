/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";
import styled from "styled-components";

interface Props {
  className: string;
  text: string;
}

const StyledExpression = styled(Expression)`
  font-family: sans-serif;
`;

function Expression({ className, text }: Props) {
  return <p className={className}>Hello, {text}!</p>;
}

export default StyledExpression;