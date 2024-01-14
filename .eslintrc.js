// .eslintrc.js
module.exports = {
  parser: 'vue-eslint-parser', // Use the Vue parser
  parserOptions: {
    parser: '@typescript-eslint/parser', // Use TypeScript ESLint parser for script tags
    extraFileExtensions: ['.vue'], // Include .vue files
  },
  plugins: [
    'vue', // Add the Vue plugin
    '@typescript-eslint', // Add the TypeScript plugin
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended', // Use recommended settings for Vue
    'plugin:@typescript-eslint/recommended', // Use recommended settings for TypeScript
  ],
  env: {
    browser: true, // if your code is for the browser
    node: true, // this will define globals like module and require
    es6: true,
  },
};