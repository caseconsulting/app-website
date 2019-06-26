module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    jest: true,
    jquery: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/prettier', 'plugin:prettier/recommended'],
  rules: {
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
