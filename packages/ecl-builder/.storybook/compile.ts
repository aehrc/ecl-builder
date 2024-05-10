import { parseModule } from 'magicast';
import type { DynamicConfig } from './types';

// adapted from https://stackblitz.com/edit/github-h2rgfk?file=README.md

export const compile = async (
  config: DynamicConfig
) => {
  const { baseCsf } = config;
  const stories = await config.stories();

  const mod = parseModule(baseCsf);
  stories.forEach(({csfName, story}) => {
    mod.exports[csfName] = story;
  });

  const { code } = mod.generate();
  return code;
};

