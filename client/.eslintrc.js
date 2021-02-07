module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'sort-destructure-keys', 'jest'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    // "react/prop-types": [2, { ignore: ["children"] }],
    'react/destructuring-assignment': 'error',
    'react/boolean-prop-naming': 'error',
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': [
      1,
      { ignoreCase: false, callbacksLast: true, shorthandLast: true },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jsx-a11y/label-has-associated-control': 0,
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
    'sort-destructure-keys/sort-destructure-keys': 2,
    'no-nested-ternary': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-underscore-dangle': 0,
  },
};
