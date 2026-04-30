import type { CamelCasedPropertiesDeep } from 'type-fest';

/**
 * Convert snake_case keys to camelCase keys
 *
 * @example
 *   camelCase('snake_case'); // 'camelCase'
 *
 * @returns The converted string
 */
function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (c) => c.toLowerCase());
}

/**
 * Convert snake_case keys to camelCase keys
 *
 * @example
 *   toCamelCaseKeys({ snake_case: 'value' }); // { camelCase: 'value' }
 *
 * @returns The converted object
 */
export const toCamelCaseKeys = <T extends object>(obj: T): CamelCasedPropertiesDeep<T> => {
  if (obj === null || obj === undefined) {
    return obj as CamelCasedPropertiesDeep<T>;
  }
  if (Array.isArray(obj)) {
    return obj.map(toCamelCaseKeys) as CamelCasedPropertiesDeep<T>;
  }
  if (typeof obj === 'object') {
    const camelCasedObject: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj)) {
      camelCasedObject[camelCase(key)] = value && typeof value === 'object' ? toCamelCaseKeys(value) : value;
    }

    return camelCasedObject as CamelCasedPropertiesDeep<T>;
  }

  return obj as CamelCasedPropertiesDeep<T>;
};
