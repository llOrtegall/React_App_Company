module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    './node_modules/standard/eslintrc.json'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn', // Agrega esta regla para requerir el tipo de retorno en las funciones
    'react/react-in-jsx-scope': 'off', // Agrega esta regla para no requerir la importación de React en archivos JSX o TSX
  },
}
