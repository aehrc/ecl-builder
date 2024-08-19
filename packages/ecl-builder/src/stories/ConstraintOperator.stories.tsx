/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { StoryFn } from "@storybook/react";
import React from "react";
import ConstraintOperator, {
  ConstraintOperatorProps,
} from "../components/ecl/sub/ConstraintOperator";

export default {
  component: ConstraintOperator,
  tags: ["autodocs"],
  argTypes: { onChange: { action: "changed" } },
};

const Template = ({ constraint, onChange }: ConstraintOperatorProps) => (
  <ConstraintOperator constraint={constraint} onChange={onChange} />
);

export const DescendantOrSelfOf: StoryFn<typeof ConstraintOperator> =
  Template.bind({});
DescendantOrSelfOf.args = {
  constraint: "descendantorselfof",
};
