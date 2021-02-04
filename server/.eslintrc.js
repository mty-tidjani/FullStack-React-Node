module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // extends: [
  //   ,
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-var': 'error',
    semi: 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'max-len': ['error', 150],
    'prefer-destructuring': ['error'],
    'no-unused-vars': 'off',
    'new-cap': 'off',
    'object-shorthand': 'warn',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'no-nested-ternary': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
  },
};
