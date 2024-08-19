import { createUnplugin } from "unplugin";
import { serverRequire } from "@storybook/core-common";
import { compile } from "./compile";

// adapted from https://stackblitz.com/edit/github-h2rgfk?file=README.md

export const DYNAMIC_STORIES_REGEX = /\.dynamic\.[tj]sx?/;

export const unplugin = createUnplugin(() => {
  return {
    name: "unplugin-dynamic-stories",
    enforce: "pre",
    loadInclude(id) {
      return DYNAMIC_STORIES_REGEX.test(id);
    },
    async load(fileName) {
      delete require.cache[fileName];
      const config = await serverRequire(fileName);
      const result = await compile(config);
      return result;
    },
  };
});

export const { webpack } = unplugin;
