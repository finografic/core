# File Naming & Organization Rules

## Naming

- Kebab-case for files: `order-summary.ts`.
- camelCase for utility files: `apiUtils.ts`.
- PascalCase for exported types/interfaces when appropriate.

## Extensions

- `.ts` for utilities and types.
- `.types.ts` for type-only files.
- `.constants.ts` for constants.
- `.utils.ts` for helpers.
- `.generated.ts` for generated files.

## Structure

```
src/
  utils/
    core.ts
    extensions.ts
  examples/
    complete-store-example/
      TodoContext.ts
      TodoProvider.tsx
      TodoTypes.ts
```

## Imports/Exports

- Prefer named exports; use `index.ts` barrels to simplify imports.

## Generated Files

- Add `🤖 AUTO-GENERATED`, timestamp, and “DO NOT EDIT MANUALLY”.

## Config Files

- Keep configs in project root (e.g., `tsup.config.ts`, `eslint.config.mjs`).
