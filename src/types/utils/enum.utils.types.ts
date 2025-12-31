import type { KebabToScreamingSnake } from './casing.utils.types';

// ------------------------------------------------------------------------ //

/**
 * Creates an enum-like object type from a kebab-case string union.
 *
 * Keys are `SCREAMING_SNAKE_CASE`, values remain kebab-case.
 *
 * @example
 * type ButtonType = "reset" | "program-time";
 *
 * const BUTTON_TYPES: EnumLike<ButtonType> = {
 *   RESET: "reset",
 *   PROGRAM_TIME: "program-time",
 * } as const;
 */
export type EnumLike<T extends string> = {
  readonly [K in T as KebabToScreamingSnake<K>]: K;
};

// ------------------------------------------------------------------------ //

/**
 * Creates an enum-like object type where both keys and values are uppercase.
 */
export type UpperEnumLike<T extends string> = {
  readonly [K in Uppercase<T>]: Uppercase<K>;
};

// ------------------------------------------------------------------------ //

/**
 * Maps a string union to a readonly record with optionally transformed values.
 *
 * @example
 * type Fields = "drinkType" | "containerType";
 *
 * type KebabFields = MappedRecord<Fields, CamelToKebab<Fields>>;
 */
export type MappedRecord<
  TKey extends string,
  TValue extends string = TKey
> = {
  readonly [K in TKey]: Extract<TValue, string>;
};

// ------------------------------------------------------------------------ //

/**
 * Creates a simple object type from a string union.
 *
 * @example
 * type StatusMap = MapIndex<"pending" | "success", boolean>;
 */
export type MapIndex<TKey extends string, TValue = unknown> = {
  [K in TKey]: TValue;
};

// ------------------------------------------------------------------------ //
