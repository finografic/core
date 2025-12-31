// ------------------------------------------------------------------------ //

/**
 * Makes specific properties of a type optional while keeping the rest required.
 *
 * @example
 * type Result = WithOptional<
 *   { id: number; email: string },
 *   'email'
 * >;
 * // { id: number; email?: string }
 */
export type WithOptional<T, K extends keyof T> =
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
export type WithRequired<T, K extends keyof T> =
  Omit<T, K> & Required<Pick<T, K>>;

// ------------------------------------------------------------------------ //
