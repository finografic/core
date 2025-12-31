/**
 * Checks whether an object contains at least one `undefined` property value.
 */
export function hasUndefinedProperty(
  obj: Record<string, unknown>,
): obj is Record<string, unknown | undefined> {
  return Object.values(obj).includes(undefined);
}
