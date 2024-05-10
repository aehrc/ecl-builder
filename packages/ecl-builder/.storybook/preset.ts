import type { Indexer } from '@storybook/types';
import { serverRequire } from '@storybook/core-common';
import { loadCsf } from '@storybook/csf-tools';
import { webpack, DYNAMIC_STORIES_REGEX } from './unplugin';
import { compile } from './compile';

// adapted from https://stackblitz.com/edit/github-h2rgfk?file=README.md

const dynamicIndexer = {
  test: DYNAMIC_STORIES_REGEX,
  createIndex: async (fileName, opts) => {
    console.log('indexing', fileName);
    delete require.cache[fileName];
    const config = await serverRequire(fileName);
    const compiled = await compile(config);
    const indexed = loadCsf(compiled, {
      ...opts,
      fileName,
      makeTitle: () => fileName.replace(/^.*\/(.+?)\..*$/, '$1'),
    }).parse();

    return indexed.indexInputs;
  },
};

export const experimental_indexers: Indexer[] = [dynamicIndexer];

export const webpackFinal = async (config: any) => {
  const { plugins = [] } = config;
  plugins.push(webpack({}));
  config.plugins = plugins;
  return config;
};

