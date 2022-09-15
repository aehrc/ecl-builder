/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

import { ComponentStory, Story } from "@storybook/react";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ConceptReference, {
  ConceptReferenceProps,
} from "../components/ecl/sub/ConceptReference";
import { queryClient } from "../queryClient";

export default {
  component: ConceptReference,
  argTypes: { onChange: { action: "changed" } },
  decorators: [
    (Story: Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

const Template = ({ concept, onChange }: ConceptReferenceProps) => (
  <ConceptReference concept={concept} onChange={onChange} />
);

export const Oedema: ComponentStory<typeof ConceptReference> = Template.bind(
  {}
);
Oedema.args = {
  concept: {
    type: "SPECIFIC_CONCEPT",
    id: "47429007",
    display: "Associated with",
  },
};
