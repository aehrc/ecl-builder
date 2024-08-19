import fs from "fs/promises";
import { glob } from "glob";
import { basename, join } from "path";
import { dedent } from "ts-dedent";
import type { StoryConfigs } from "./types";

export default // adapted from https://stackblitz.com/edit/github-h2rgfk?file=README.md
{
  baseCsf: dedent`
      import BuilderAndResult from "./BuilderAndResult";
      export default { component: BuilderAndResult };
    `,
  stories: async () => {
    const result = [] as StoryConfigs;

    const fixtureDir = join(__dirname, "../grammar/examples");
    const fixtures = await glob(fixtureDir + "/**/*.txt");

    await Promise.all(
      fixtures.map(async (file) => {
        try {
          const fixture = await fs.readFile(file, "utf-8");
          const csfName = basename(file, ".txt");
          result.push({
            csfName,
            story: {
              args: { expression: fixture },
            },
          });
        } catch (err) {
          console.warn({ file, err });
        }
      }),
    );

    const sortedStories = sortStories(result);

    // Transform name into valid module name
    sortedStories.forEach(
      (story) => (story.csfName = "_" + story.csfName.replace(/\./g, "_")),
    );

    sortedStories.unshift({ csfName: "Blank", story: {} });

    return sortStories(result);
  },
};

const sortStories = (examples: StoryConfigs) => {
  // Sort the examples, based on the assumption that they use a dotted numbered prefix.
  const sortedKeys = examples.sort(({ csfName: a }, { csfName: b }) => {
    // Get the final component of the path, following the last forward slash.
    const aPath = a.split("/").pop(),
      bPath = b.split("/").pop();

    // Get the example number, which precedes the first underscore.
    const aFullNumber = aPath?.split("_")[0],
      bFullNumber = bPath?.split("_")[0];

    // Get the numeric components of the example number.
    const aNumbers = aFullNumber?.split("."),
      bNumbers = bFullNumber?.split(".");

    let position = 0;
    let comparison = 0;

    // Go through each of the numeric components in order until a pair is found that are not equal.
    while (comparison === 0) {
      const aNumber = aNumbers ? parseInt(aNumbers[position]) : 0,
        bNumber = bNumbers ? parseInt(bNumbers[position]) : 0;
      comparison = aNumber - bNumber;
      position++;
    }

    // Return the difference between the unequal components.
    return comparison;
  });

  return sortedKeys;
};
