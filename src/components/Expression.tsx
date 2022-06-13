/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import React from "react";

interface Props {
  text: string;
}

export default function Expression({ text }: Props) {
  return <p>Hello, {text}!</p>;
}