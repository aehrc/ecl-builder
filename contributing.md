# How to contribute

Thanks for your interest in contributing to ecl-builder.

You can find out a bit more about ecl-builder by reading the [README](./README.md)
file within this repository.

## Reporting issues

Issues can be used to:

- Report a defect
- Request a new feature or enhancement
- Ask a question

Please search through existing issues to ensure you are not creating a duplicate. Include as much information as you can in your issue, and if possible produce a link to a [minimum reproducible example](https://stackoverflow.com/help/minimal-reproducible-example).

## Creating a pull request

Please communicate with us (preferably through creation of an issue) before
embarking on any significant work within a pull request. This will prevent
situations where people are working at cross-purposes.

Your branch should be named `issue/[GitHub issue #]`.

## Development dependencies

You will need the following software to build the solution:

- Node.js 20^

To run the ecl-builder locally, run in the root dir:

```
npm install
cd apps
npm run start
```

### Local HTTPS certificate

Storybook is configured to run over HTTPS using a local certificate. To
generate the required certificate and key files:

```bash
cd packages/ecl-builder
mkdir -p .local
openssl req -x509 -newkey rsa:2048 \
  -keyout .local/key.pem -out .local/cert.pem \
  -days 365 -nodes -subj '/CN=localhost'
```

### Code quality checks

The following checks are enforced by CI on every push. Run them locally before
pushing to avoid failures.

All commands should be run from the repository root.

**Formatting** - [Prettier](https://prettier.io/) enforces consistent code
style:

```bash
npm run format:check -w packages/ecl-builder  # check for issues
npm run format -w packages/ecl-builder         # auto-fix
```

**Linting** - [ESLint](https://eslint.org/) checks for code quality and
correctness:

```bash
npm run lint -w packages/ecl-builder       # check for issues
npm run lint:fix -w packages/ecl-builder   # auto-fix where possible
```

**Code duplication** - [jscpd](https://github.com/kucherenko/jscpd) detects
copy-paste duplication:

```bash
npm run lint:duplication -w packages/ecl-builder
```

## Code of conduct

Before making a contribution, please read the
[code of conduct](CODE_OF_CONDUCT.md).
