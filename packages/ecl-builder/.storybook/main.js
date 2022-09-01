/*
 * Copyright © 2022, Commonwealth Scientific and Industrial Research
 * Organisation (CSIRO) ABN 41 687 119 230. All rights reserved.
 */

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    // Load ECL examples into the Storybook bundle, so that we can automatically
    // generate stories for them.
    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader",
    });
    config.devtool = "source-map";
    return config;
  },
};
