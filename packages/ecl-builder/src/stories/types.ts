import type { StoryObj } from '@storybook/react';

export type StoryConfigs = {csfName: string, story: StoryObj}[];

export interface DynamicConfig {
  baseCsf: string;
  stories: () => Promise<StoryConfigs> | StoryConfigs;
}