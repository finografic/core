import { capitalize } from './string-format.utils';

/**
 * Converts a camelCase identifier segment to kebab-case.
 *
 * @returns A kebab-cased string.
 */
export const camelCaseToKebab = (value: string): string => {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * Converts a camelCase identifier into a human-readable sentence-style string.
 *
 * @returns A sentence-cased string with spaces added before capitals.
 */
export const camelCaseToSentence = (value: string): string => {
  if (!value) return value;

  const withSpaces = value.replace(/([A-Z])/g, ' $1');
  return capitalize(withSpaces);
};
