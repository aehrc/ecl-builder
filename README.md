# ECL Builder

This is a collection of components and an app that allow a user to visually
build a SNOMED CT [Expression Constraint Language (ECL)](http://snomed.org/ecl)
query.

The app is currently hosted [here](https://main.d3gfg08ybf406s.amplifyapp.com/).

## Getting Started

An Example of the components being used can be found in [apps/App.tsx](./apps/ecl-builder-app/src/App.tsx).

To run this example

```
npm install
cd apps
npm run start
```

A good place to get started with the codebase is to view the [ExpressionBuilder.tsx](./packages/ecl-builder/src/components/ExpressionBuilder.tsx) component.

This project uses storybook, to run storybook:

```
cd packages/ecl-builder
npm run storybook
```

## License

This project uses the Apache License 2.0.

To read more on it see [LICENSE](./LICENCE)

## Contributing

Contributions are always welcome!

See [contributing.md](./contributing.md) for ways to get started.

## Code of conduct

Please adhere to this project's [code_of_conduct.md](./code_of_conduct.md).

Copyright © 2022, Commonwealth Scientific and Industrial Research Organisation
(CSIRO) ABN 41 687 119 230. All rights reserved.
