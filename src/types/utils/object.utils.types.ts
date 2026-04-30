import type { SnakeToCamel } from './casing.utils.types';

// ------------------------------------------------------------------------ //

/**
 * Transforms object keys from `snake_case` to `camelCase`, recursively.
 *
 * @example
 *   type Result = CamelCasedKeys<{ user_id: string }>;
 *   // { userId: string }
 */
export type CamelCasedKeys<T> = {
  [K in keyof T as SnakeToCamel<string & K>]: T[K] extends object ? CamelCasedKeys<T[K]> : T[K];
};

// ------------------------------------------------------------------------ //

/**
 * Removes index signatures from an object type while preserving explicit keys.
 *
 * @example
 *   type Result = RemoveIndexSignature<{ id: number; [key: string]: any }>;
 *   // { id: number }
 */

export type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : symbol extends K ? never : K]: T[K];
};

// ------------------------------------------------------------------------ //

/**
 * Overrides specific properties of a type with new definitions.
 *
 * @example
 *   type Result = OverridePropTypes<{ id: number }, { id: string }>;
 *   // { id: string }
 */
export type OverridePropTypes<T, U> = Omit<T, keyof U> & U;

// ------------------------------------------------------------------------ //
