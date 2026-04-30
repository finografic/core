/**
 * Checks whether an object contains at least one `undefined` property value.
 */
export function hasUndefinedProperty(obj: Record<string, unknown>): boolean {
  return Object.values(obj).includes(undefined);
}
