/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ComponentStory } from "@storybook/react";
import React from "react";
import ComparisonOperator, {
  ComparisonOperatorProps,
} from "../components/ecl/refinement/ComparisonOperator";
import { EXPRESSION_COMPARISON_OPERATORS } from "../components/ecl/refinement/RefinementVisitor";

export default {
  component: ComparisonOperator,
  argTypes: { onChange: { action: "changed" } },
};

const Template = ({
  type,
  typeLabelMap,
  onChange,
}: ComparisonOperatorProps) => (
  <ComparisonOperator
    type={type}
    typeLabelMap={typeLabelMap}
    onChange={onChange}
  />
);

export const DescendantOrSelfOf: ComponentStory<typeof ComparisonOperator> =
  Template.bind({});
DescendantOrSelfOf.args = {
  type: "=",
  typeLabelMap: EXPRESSION_COMPARISON_OPERATORS,
};
