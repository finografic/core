// import tseslint from '@typescript-eslint/eslint-plugin';
// import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import markdownlintPlugin from "eslint-plugin-markdownlint";
import markdownlintParser from "eslint-plugin-markdownlint/parser.js";
import simpleImportSort from 'eslint-plugin-simple-import-sort';

// NOTE: ALL @typescript-eslint/eslint-plugin (over 100 rules))
// https://typescript-eslint.io/rules/

export default [
  js.configs.recommended,
  // tseslint.configs.strictTypeChecked, // ref: https://typescript-eslint.io/getting-started/typed-linting
  // tseslint.configs.stylisticTypeChecked, // ref: https://typescript-eslint.io/getting-started/typed-linting

  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  {
    files: ['**/*.ts', '**/*.tsx', './*.ts', './*.mjs'],
    languageOptions: {
      // parser: tsParser,
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        URL: 'readonly',
      },
    },
    plugins: {
      // '@typescript-eslint': tseslint,
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort,
      'stylistic': stylistic,
    },
    rules: {
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'stylistic/semi': 'error',
      'stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/no-multi-spaces': ['error', { exceptions: { Property: true } }],

      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-redeclare': 'warn',

      'no-console': 'warn',

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node','^@finografic', '^@workspace'],
            ['^\\u0000'],
            [
              '^(lib|utils)',
              '^(types|constants|config)',
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },

  {
    files: ['**/*.md'],
    ignores: [
      'node_modules/**',
      'dist/**',
      '.cursor/chat/**',
      '.github/instructions/**',
      '!templates/**',
    ],
    plugins: {
      'markdownlint': markdownlintPlugin,
      'stylistic': stylistic,
    },
    languageOptions: {
      parser: markdownlintParser
    },
    rules: {
      ...markdownlintPlugin.configs.recommended.rules,
      "markdownlint/md012": "off", // Line length
      "markdownlint/md013": "off", // Line length
      "markdownlint/md024": "off", // Duplicate headings
      "markdownlint/md025": "off", // Single h1
      "markdownlint/md040": "off", // Fenced code language
      "markdownlint/md041": "off", // First line heading
      "markdownlint/md043": "off", // Required heading structure
      'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/no-multi-spaces': ['error', { exceptions: { Property: true } }],
    }
  }
];
