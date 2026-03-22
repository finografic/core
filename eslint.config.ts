/// <reference path="./src/declarations.d.ts" />
import tseslint from 'typescript-eslint';

import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import markdownlintPlugin from 'eslint-plugin-markdownlint';
import markdownlintParser from 'eslint-plugin-markdownlint/parser.js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/.cursor/hooks/**',
    '**/.cursor/chats/**',
    '**/.claude/**',
  ]),

  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx', './*.ts', './*.mjs'],
    languageOptions: {
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
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSort,
      stylistic,
    },
    rules: {
      // Disable base rules in favor of TS-aware ones
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'no-console': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-redeclare': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],

      'stylistic/semi': ['error'],
      'stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      // TODO: REMOVE `ConditionalExpression` WHEN oxfmt IS ADDED TO
      'stylistic/indent': ['warn', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
      'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
      'stylistic/no-multi-spaces': ['warn', { exceptions: { Property: true } }],
      'stylistic/no-trailing-spaces': 'warn',
      'stylistic/object-curly-spacing': ['error', 'always'],
      'stylistic/comma-spacing': ['error', { before: false, after: true }],
      'stylistic/comma-dangle': ['error', 'only-multiline'],
      'stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      'stylistic/arrow-spacing': ['error', { before: true, after: true }],

      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node', '^@finografic', '^@workspace'],
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
    ],
    languageOptions: {
      parser: markdownlintParser,
    },
    plugins: {
      markdownlint: markdownlintPlugin as Linter.Processor,
      stylistic: stylistic,
    },
    rules: {
      ...markdownlintPlugin.configs.recommended.rules,
      'markdownlint/md001': 'off', // heading increment
      'markdownlint/md004': 'off', // Unordered list style
      'markdownlint/md012': 'off', // Multiple consecutive blank lines
      'markdownlint/md013': 'off', // Line length
      'markdownlint/md024': 'off', // Duplicate headings
      'markdownlint/md025': 'off', // Single h1
      'markdownlint/md026': 'off', // Trailing punctuation in heading
      'markdownlint/md029': 'off', // List style
      'markdownlint/md036': 'off', // No emphasis as heading
      'markdownlint/md040': 'off', // Fenced code language
      'markdownlint/md041': 'off', // First line heading
      'markdownlint/md043': 'off', // Required heading structure
      'markdownlint/md045': 'off', // images require alt text

      // Formatting consistency
      'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/no-multi-spaces': ['error', { exceptions: { Property: true } }],
    },
  },
]);
