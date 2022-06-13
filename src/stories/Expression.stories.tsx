/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Expression from "../components/Expression";

export default {
  title: "Expression",
  component: Expression
} as ComponentMeta<typeof Expression>;

const Template: ComponentStory<typeof Expression> = (args) => <Expression {...args} />;

export const Simple = Template.bind({});
Simple.args = { expression: "30404011000036106" };
