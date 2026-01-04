// ------------------------------------------------------------------------ //

/**
 * Makes specific properties of a type optional while keeping the rest required.
 *
 * @example
 * type Result = OptionalProp<
 *   { id: number; email: string },
 *   'email'
 * >;
 * // { id: number; email?: string }
 */
export type OptionalProp<T, K extends keyof T> =
  Omit<T, K> & Partial<Pick<T, K>>;

// ------------------------------------------------------------------------ //

/**
 * Makes specific properties of a type required while leaving others unchanged.
 *
 * @example
 * type Result = WithRequired<
 *   { id?: number; name?: string },
 *   'id'
 * >;
 * // { id: number; name?: string }
 */
export type RequiredProp<T, K extends keyof T> =
  Omit<T, K> & Required<Pick<T, K>>;

// ------------------------------------------------------------------------ //
