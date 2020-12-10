# eslint-config-gbv

[![License](https://img.shields.io/github/license/gbv/eslint-config-gbv.svg)](https://github.com/gbv/eslint-config-gbv/blob/master/LICENSE)

> Internal linting rules for GBV projects.

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Rules](#rules)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Install
```bash
npm i -D https://github.com/gbv/eslint-config-gbv
```

If you don't have `eslint` installed in your project yet, you need to do this:
```bash
# For all projects:
npm i -D eslint
# Additionally for Vue.js projects:
npm i -D eslint-plugin-vue
```

## Usage
Add the following to you ESLint config:
```json
"extends": [
  "gbv"
]
```

For Vue.js projects, use the following instead (replace `2` with `3` for Vue 3 projects):
```json
"extends": [
  "gbv",
  "gbv/vue/2"
]
```

Please enforce linting before a commit in all projects.

## Rules
### General
Using `eslint:recommended` as a base, with the following overriding rules:

- Indentation: Two spaces, indent `case` in switch statements.
- Unix style line endings.
- Double quotes.
- Disallow quotes around object literal property names if they are not needed.
- No semicolons.
- Enforce comma dangle on multiline statements (see [this](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8)).
- Allow console.

### Vue.js
Using [`plugin:vue/recommended`/`plugin:vue/vue3-recommended`](https://github.com/vuejs/eslint-plugin-vue) as a base, with the following overriding rules:

- Allow v-html.
- No closing bracket newline.
- One space for closing brackets on self-closing tags.

## Maintainers
- [@stefandesu](https://github.com/stefandesu)
- [@nichtich](https://github.com/nichtich)

## Contribute
PRs are welcome, but we only use this for our own project and it shouldn't be of much interest for anyone else.

If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License
MIT ©2019 Verbundzentrale des GBV (VZG)
