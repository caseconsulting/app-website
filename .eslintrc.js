module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 9
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2022: true,
    jest: true,
    jquery: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/eslint-config-prettier'],
  rules: {
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow component names to be a single word
    'vue/multi-word-component-names': 'off'
  }
};
