module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard'
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    // Add any additional rules or overrides here
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
