/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
