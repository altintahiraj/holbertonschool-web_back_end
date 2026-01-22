import js from "@eslint/js";

export default [
  {
    ignores: ["babel.config.js"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-shadow": "off",
    },
  },
];
