import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'off', // Turned off in favor of TypeScript's version
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-redeclare': 'off', // Turned off in favor of TypeScript's version
      '@typescript-eslint/no-redeclare': 'warn',
    },
  },
]
