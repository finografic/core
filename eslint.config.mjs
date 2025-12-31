import js from '@eslint/js'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescript,
      'simple-import-sort': simpleImportSort,
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
      'no-unused-vars': 0, // Turned off in favor of TypeScript's version
      '@typescript-eslint/no-unused-vars': 2,
      'no-console': 1,
      'no-redeclare': 0, // Turned off in favor of TypeScript's version
      '@typescript-eslint/no-redeclare': 1,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^@finografic', '^@workspace'],
          ['^\\u0000'],
          [
            '^(lib)',
            '^(utils)',
            '^(types|constants)',
            '^(config)',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 2,
    },
  },
]
