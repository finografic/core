import type { CamelCasedPropertiesDeep } from 'type-fest';

/**
 * Convert snake_case keys to camelCase keys
 *
 * @returns The converted string
 * @example
 * camelCase('snake_case') // 'camelCase'
 */
function camelCase(str: string): string {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
    .replace(/^(.)/, (c) => c.toLowerCase());
}

/**
 * Convert snake_case keys to camelCase keys
 *
 * @returns The converted object
 * @example
 * toCamelCaseKeys({ snake_case: 'value' }) // { camelCase: 'value' }
 */
export const toCamelCaseKeys = <T extends object>(input: T): CamelCasedPropertiesDeep<T> => {
  if (input === null || input === undefined) {
    return input as CamelCasedPropertiesDeep<T>;
  }
  if (Array.isArray(input)) {
    return input.map(toCamelCaseKeys) as CamelCasedPropertiesDeep<T>;
  }
  if (typeof input === 'object') {
    return Object.entries(input).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [camelCase(key)]: value && typeof value === 'object' ? toCamelCaseKeys(value) : value,
      }),
      {},
    ) as CamelCasedPropertiesDeep<T>;
  }

  return input as CamelCasedPropertiesDeep<T>;
};
