// ESLint 9 flat config — replaces legacy .eslintrc.js
const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const importPlugin = require("eslint-plugin-import");

module.exports = [
  {ignores: ["node_modules/", ".cache/", "public/", "*.log"]},
  js.configs.recommended,
  {
    files: ["eslint.config.js", "gatsby-*.js", "postcss.config.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "writable",
        exports: "writable",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {ecmaFeatures: {jsx: true}},
      globals: {window: "readonly", document: "readonly", navigator: "readonly", localStorage: "readonly"},
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    settings: {react: {version: "detect"}},
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "no-multi-spaces": ["error"],
      curly: ["error", "multi-or-nest"],
    },
  },
];
