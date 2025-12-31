// ------------------------------------------------------------------------ //

/**
 * Transforms a `camelCase` string literal type into `kebab-case`.
 *
 * @example
 * type Result = CamelToKebab<"userProfileData">;
 * // "user-profile-data"
 */
export type CamelToKebab<S extends string> =
  S extends `${infer C}${infer T}`
    ? T extends Uncapitalize<T>
      ? `${Uncapitalize<C>}${CamelToKebab<T>}`
      : `${Uncapitalize<C>}-${CamelToKebab<T>}`
    : S;

// ------------------------------------------------------------------------ //

/**
 * Transforms a `kebab-case` string literal type into `camelCase`.
 *
 * @example
 * type Result = KebabToCamel<"user-profile-data">;
 * // "userProfileData"
 */
export type KebabToCamel<S extends string> =
  S extends `${infer T}-${infer U}`
    ? `${T}${Capitalize<KebabToCamel<U>>}`
    : S;

// ------------------------------------------------------------------------ //

/**
 * Transforms a `snake_case` string literal type into `camelCase`.
 *
 * @example
 * type Result = SnakeToCamel<"user_profile_data">;
 * // "userProfileData"
 */
export type SnakeToCamel<S extends string> =
  S extends `${infer T}_${infer U}`
    ? `${T}${Capitalize<SnakeToCamel<U>>}`
    : S;

// ------------------------------------------------------------------------ //

/**
 * Transforms a `camelCase` string literal type into `snake_case`.
 *
 * @example
 * type Result = CamelToSnake<"userProfileData">;
 * // "user_profile_data"
 */
export type CamelToSnake<S extends string> =
  S extends `${infer C}${infer T}`
    ? T extends Uncapitalize<T>
      ? `${Uncapitalize<C>}${CamelToSnake<T>}`
      : `${Uncapitalize<C>}_${CamelToSnake<T>}`
    : S;

// ------------------------------------------------------------------------ //

/**
 * Transforms a `kebab-case` string literal type into `SCREAMING_SNAKE_CASE`.
 *
 * @example
 * type Result = KebabToScreamingSnake<"user-profile-data">;
 * // "USER_PROFILE_DATA"
 */
export type KebabToScreamingSnake<S extends string> =
  S extends `${infer T}-${infer U}`
    ? `${Uppercase<T>}_${KebabToScreamingSnake<U>}`
    : Uppercase<S>;

// ------------------------------------------------------------------------ //

/**
 * Transforms a `SCREAMING_SNAKE_CASE` string literal type into `kebab-case`.
 *
 * @example
 * type Result = ScreamingSnakeToKebab<"USER_PROFILE_DATA">;
 * // "user-profile-data"
 */
export type ScreamingSnakeToKebab<S extends string> =
  S extends `${infer T}_${infer U}`
    ? `${Lowercase<T>}-${ScreamingSnakeToKebab<U>}`
    : Lowercase<S>;

// ------------------------------------------------------------------------ //
