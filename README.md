# 🦋 @finografic/core

Core TypeScript utilities, types, and shared primitives for the finografic ecosystem.

## Installation

```bash
pnpm add @finografic/core
```

## Exports

All exports are available from the main entry point:

```typescript
import { ... } from '@finografic/core';
```

- `@finografic/core/constants` - Shared constants
- `@finografic/core/types` - Utility types
- `@finografic/core/types/utils` - Advanced type utilities
- `@finografic/core/utils` - Utility functions

## Contents

### Constants

- **Zod Errors**: Error codes and messages for Zod validation

### Utility Types

- **Basic Utilities**: Types for handling null, undefined, and primitive values
- **Casing Utilities**: Type-level string case conversion utilities
  (camelCase, kebab-case, snake_case transformations)
- **Object Utilities**: Types for object key transformations, index signature
  removal, and property type overrides
- **Enum Utilities**: Types for working with enums, enum-like objects, and
  mapped record structures
- **Props Utilities**: Types for making object properties optional or required

### Utils

- **String Case**: Functions for string case transformations and formatting
  (capitalization, title case, camelCase to kebab-case conversions)
- **Object Case**: Utilities for recursively converting object keys between
  different case conventions
- **Object Guards**: Type guards for checking object property states
- **Time**: Duration formatting, parsing, and validation utilities
