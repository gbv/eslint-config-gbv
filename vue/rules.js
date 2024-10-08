export default {
  // We need v-html at some places.
  "vue/no-v-html": "off",
  // Closing bracket formatting.
  "vue/html-closing-bracket-newline": [
    "error",
    {
      singleline: "never",
      multiline: "never",
    },
  ],
  "vue/html-closing-bracket-spacing": [
    "error",
    {
      startTag: "never",
      endTag: "never",
      selfClosingTag: "always",
    },
  ],
  // Allow single word component names, but warn about it.
  "vue/multi-word-component-names": "warn",
}
