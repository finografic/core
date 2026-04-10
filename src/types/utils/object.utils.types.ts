import type { SnakeToCamel } from './casing.utils.types';

// ------------------------------------------------------------------------ //

/**
 * Transforms object keys from `snake_case` to `camelCase`, recursively.
 *
 * @example
 * type Result = CamelCasedKeys<{ user_id: string }>;
 * // { userId: string }
 */
export type CamelCasedKeys<T> = {
  [K in keyof T as SnakeToCamel<string & K>]: T[K] extends object ? CamelCasedKeys<T[K]> : T[K];
};

// ------------------------------------------------------------------------ //

// DEPRECATED: V1

/**
 * Removes index signatures from an object type while preserving explicit keys.
 *
 * @example
 * type Result = StripIndexSignature<{ id: number; [key: string]: any }>;
 * // { id: number }
 */
export type StripIndexSignature<T extends Record<string, unknown>> = {
  [K in keyof T as K extends string ? K : never]: T[K];
};

// ------------------------------------------------------------------------ //

// NEW: V2 - of `RemoveIndexSignature` that uses `oxfmt-ignore` to avoid index signature errors.

/**
 * Removes index signatures from an object type while preserving explicit keys.
 *
 * @example
 * type Result = RemoveIndexSignature<{ id: number; [key: string]: any }>;
 * // { id: number }
 */

/* eslint-disable */
// oxfmt-ignore
export type RemoveIndexSignature<T> = {
  [
    K in keyof T as string extends K ? never
      : number extends K ? never
      : symbol extends K ? never
      : K
  ]: T[K];
};
/* eslint-enable */

// ------------------------------------------------------------------------ //

/**
 * Overrides specific properties of a type with new definitions.
 *
 * @example
 * type Result = OverridePropTypes<{ id: number }, { id: string }>;
 * // { id: string }
 */
export type OverridePropTypes<T, U> = Omit<T, keyof U> & U;

// ------------------------------------------------------------------------ //
