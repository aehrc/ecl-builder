/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { StoryFn } from "@storybook/react";
import React from "react";
import ComparisonOperator, {
  ComparisonOperatorProps,
} from "../components/ecl/refinement/ComparisonOperator";
import { EXPRESSION_COMPARISON_OPERATORS } from "../components/ecl/refinement/RefinementVisitor";

export default {
  component: ComparisonOperator,
  tags: ['autodocs'],
  argTypes: { onChange: { action: "changed" } },
};

const Template = ({
  type,
  typeLabelMap,
  onChange,
}: ComparisonOperatorProps<keyof typeof EXPRESSION_COMPARISON_OPERATORS>) => (
  <ComparisonOperator
    type={type}
    typeLabelMap={typeLabelMap}
    onChange={onChange}
  />
);

export const IsEqualTo: StoryFn<typeof ComparisonOperator> =
  Template.bind({});
  IsEqualTo.args = {
  type: "=",
  typeLabelMap: EXPRESSION_COMPARISON_OPERATORS,
};
