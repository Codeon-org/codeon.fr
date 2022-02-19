module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
  },
};
