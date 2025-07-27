# @finografic/core

Core package for finografic projects containing shared types, utilities, constants, and API utilities.

## Installation

```bash
pnpm add @finografic/core
```

## Usage

### Main Import

```typescript
import { /* all exports */ } from '@finografic/core'
```

### Specific Module Imports

```typescript
// API utilities
import { ApiError, createApiError } from '@finografic/core/api'

// Types
import { Language, Country } from '@finografic/core/types'

// Utilities
import { formatString } from '@finografic/core/utils'

// Constants
import { ZOD_ERROR_MESSAGES } from '@finografic/core/constants'
```

## Modules

### API (`@finografic/core/api`)

- **ApiError** - Custom API error class
- **createApiError** - Utility to create API errors
- **Error schemas** - Zod schemas for error validation
- **API types** - TypeScript interfaces for API responses

### Types (`@finografic/core/types`)

- **Language types** - Language codes and interfaces
- **Country types** - Country data and interfaces
- **Utility types** - Common utility type definitions
- **Type utilities** - Helper types and utilities

### Utils (`@finografic/core/utils`)

- **String utilities** - String formatting and manipulation
- **Common utilities** - Reusable utility functions

### Constants (`@finografic/core/constants`)

- **Zod error messages** - Standardized error messages for Zod validation
- **Misc constants** - Other shared constants

## Development

```bash
# Install dependencies
pnpm install

# Build
pnpm build

# Development mode
pnpm dev

# Lint
pnpm lint
```

## Structure

```
src/
├── api/           # API utilities and error handling
├── constants/     # Shared constants
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── index.ts       # Main entry point
```

## Dependencies

- **axios** - HTTP client for API utilities
- **lodash** - Utility library
- **stoker** - State management utilities
- **zod** - Schema validation (peer dependency)
