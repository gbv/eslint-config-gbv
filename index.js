module.exports = {
  extends: [
    "eslint:recommended",
  ],
  // Unignore dotfiles
  ignorePatterns: ["!.*"],
  rules: {
    // console.log, console.warn, and console.error can be used.
    "no-console": "off",
    // Always use two spaces, and indent switch-case statements.
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
      },
    ],
    // Use Unix line endings (\n).
    "linebreak-style": [
      "error",
      "unix",
    ],
    // Use double quotes.
    quotes: [
      "error",
      "double",
    ],
    "quote-props": [
      "error",
      "as-needed",
    ],
    // Disallow semicolons.
    semi: [
      "error",
      "never",
    ],
    // See: https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    // Always require curly braces for all control statements (https://eslint.org/docs/latest/rules/curly)
    curly: "error",
    // No single-line braces (https://eslint.org/docs/latest/rules/brace-style)
    "brace-style": [
      "error",
      "1tbs",
      { allowSingleLine: false },
    ],
  },
}
