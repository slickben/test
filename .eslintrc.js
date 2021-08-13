module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'consistent-return': 2,
    indent: [1, 2],
    'no-else-return': 1,
    'space-unary-ops': 2,
    'no-unexpected-multiline': 'error',
    'no-console': 'off',
  },
}
