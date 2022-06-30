/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { storiesOf } from "@storybook/react";
import React from "react";
import ExpressionBuilder from "../components/ExpressionBuilder";

// Load each of the text examples into an object, with the file name as the key and the contents as
// the value.
const examples = require.context("../grammar/examples", true, /\.txt$/);
const stories = storiesOf("ExpressionBuilder", module);

// Sort the examples, based on the assumption that they use a dotted numbered prefix.
const sortedKeys = examples.keys().sort((a, b) => {
  // Get the final component of the path, following the last forward slash.
  const aPath = a.split("/").pop(),
    bPath = b.split("/").pop();

  // Get the example number, which precedes the first underscore.
  const aFullNumber = aPath?.split("_")[0],
    bFullNumber = bPath?.split("_")[0];

  // Get the numeric components of the example number.
  const aNumbers = aFullNumber?.split("."),
    bNumbers = bFullNumber?.split(".");

  let position = 0;
  let comparison = 0;

  // Go through each of the numeric components in order until a pair is found that are not equal.
  while (comparison === 0) {
    const aNumber = aNumbers ? parseInt(aNumbers[position]) : 0,
      bNumber = bNumbers ? parseInt(bNumbers[position]) : 0;
    comparison = aNumber - bNumber;
    position++;
  }

  // Return the difference between the unequal components.
  return comparison;
});

stories.add("Blank", () => <ExpressionBuilder />);

for (const name of sortedKeys) {
  // The name of the story will be the filename of the example, minus the extension.
  const displayName = name
    .split("/")
    .pop()
    ?.replace(/\.txt$/, "");

  stories.add(displayName || "Unnamed example", () => (
    <ExpressionBuilder expression={examples(name).default} />
  ));
}
