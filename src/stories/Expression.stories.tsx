/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { storiesOf } from "@storybook/react";
import React from "react";
import Expression from "../components/Expression";

const examples = require.context("../grammar/examples", true, /\.txt$/);
const stories = storiesOf("SI Examples", module);

// Sort the examples, based on the assumption that they use a dotted numbered prefix.
const sortedKeys = examples.keys().sort((a, b) => {
  const aPath = a.split("/").pop(),
    bPath = b.split("/").pop();
  const aFullNumber = aPath?.split("_")[0],
    bFullNumber = bPath?.split("_")[0];
  const aNumbers = aFullNumber?.split("."),
    bNumbers = bFullNumber?.split(".");
  let position = 0;
  let comparison = 0;
  while (comparison === 0) {
    const aNumber = aNumbers ? parseInt(aNumbers[position]) : 0,
      bNumber = bNumbers ? parseInt(bNumbers[position]) : 0;
    comparison = aNumber - bNumber;
    position++;
  }
  return comparison;
});

for (const name of sortedKeys) {
  const displayName = name.split("/").pop()?.replace(/\.txt$/, "");
  stories.add(displayName || "Unnamed example", () =>
    <Expression expression={examples(name).default} />);
}