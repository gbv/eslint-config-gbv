import vue from "eslint-plugin-vue"
import rules from "./rules.js"

export default [
  ...vue.configs["flat/recommended"],
  {
    rules,
  },
]
