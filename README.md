# eslint-config-gbv

[![NPM package name](https://img.shields.io/badge/npm-eslint--config--gbv-blue.svg)](https://www.npmjs.com/package/eslint-config-gbv)
[![License](https://img.shields.io/github/license/gbv/eslint-config-gbv.svg)](https://github.com/gbv/eslint-config-gbv/blob/master/LICENSE)

> Internal linting rules for GBV/coli-conc projects.

## Table of Contents <!-- omit in toc -->
- [Install](#install)
- [Usage](#usage)
- [Enforce Linting](#enforce-linting)
- [Rules](#rules)
  - [General](#general)
  - [Vue.js](#vuejs)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Install
```bash
npm i -D eslint-config-gbv@"~2.6"
```

eslint-config-gbv v2.x only works with ESLint v9.x and the new [flat config format](https://eslint.org/docs/latest/use/configure/migration-guide). It is recommended to use the same minor version of ESLint in your project as is used in this project (as minor updates in ESLint can include rule changes). Current, this is ESLint v9.16:

```bash
npm i -D eslint@"~9.16"
```

For older versions of ESLint (using the previous config format), use [eslint-config-gbv v1.1.0](https://github.com/gbv/eslint-config-gbv/tree/v1.1.0).

## Usage
Create a `eslint.config.js` file with the following content:

```js
import gbv from "eslint-config-gbv"
export default gbv
```

If you need to include your own rules, or to add Vue.js-specific rules, do this:

```js
import gbv from "eslint-config-gbv"
import vue from "eslint-config-gbv/vue"
// import vue from "eslint-config-gbv/vue2" // use this for Vue.js 2

export default [
  ...gbv,
  ...vue,
  // Your own rules or other configs/plugins here:
  {
    // ...
  },
]
```

See also: https://eslint.org/docs/latest/use/configure/combine-configs

Please enforce linting before a commit in all projects.

## Enforce Linting

You can enforce linting before a commit on all staged files by utilizing the packages [pre-commit](https://www.npmjs.com/package/pre-commit) and [lint-staged](https://www.npmjs.com/package/lint-staged):

```sh
npm i -D pre-commit lint-staged
```

Then add the following to `package.json`:

```json
{
  "scripts": {
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "**/*.js": [
      "eslint --fix"
    ],
    "*.js": [
      "eslint --fix"
    ]
  },
  "pre-commit": "lint-staged"
}
```

Make sure to add other file extensions as necessary.

Additionally, you can add linting to your Mocha tests as well. Create a file `test/eslint.js` (or `test/eslint.mjs` in CommonJS projects) with the following content:

```js
import assert from "node:assert"
import { loadESLint } from "eslint"

const DefaultESLint = await loadESLint()
const eslint = new DefaultESLint()
const results = await eslint.lintFiles([
  "**/*.js",
  // Add more file patterns here if necessary
])

describe("ESLint Errors", () => {

  results.forEach(result => {
    it(result.filePath, (done) => {
      assert(
        result.errorCount === 0,
        "\n" + result.messages.map(m => `\t\t${m.line}:${m.column}\terror\t${m.message}\t${m.ruleId}`).join("\n"),
      )
      done()
    })
  })

})
```

Each file will be its own test case and errors will be appropriately reported.

## Rules
### General
Using [ESLint's `recommended` rules](https://www.npmjs.com/package/@eslint/js) as a base, with the following overriding rules:

- Indentation: Two spaces, indent `case` in switch statements.
- Unix style line endings.
- Double quotes.
- Disallow quotes around object literal property names if they are not needed.
- No semicolons.
- Enforce comma dangle on multiline statements (see [this](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8)).
- Allow console.
- Control statement brace style:
  - Enforce curly braces for all control statements.
  - Disallow single-line curly braces.
- Allow caught error arguments and argument variables starting with `_` to be unused.
- Require `let` or `const` instead of `var`.

### Vue.js
Using [Vue.js's `flat/recommended`/`flat/vue2-recommended`](https://eslint.vuejs.org/) as a base, with the following overriding rules:

- Allow v-html.
- No closing bracket newline.
- One space for closing brackets on self-closing tags.
- Only warn (instead of error) for single word component names.

## Maintainers
- [@stefandesu](https://github.com/stefandesu)
- [@nichtich](https://github.com/nichtich)

## Contribute
PRs are welcome, but we only use this for our own project and it shouldn't be of much interest for anyone else.

If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License
MIT @2024 Verbundzentrale des GBV (VZG)
