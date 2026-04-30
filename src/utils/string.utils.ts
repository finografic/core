/**
 * Capitalizes the first character of a string (human-readable / UI text).
 *
 * @returns The input string with its first character uppercased.
 */
export const capitalize = (value: string): string => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

/**
 * Converts a string to title case for display (labels, headings).
 *
 * Words are split on whitespace; no typography rules beyond simple capitalization.
 *
 * @returns A title-cased string.
 */
export const toTitleCase = (input: string): string => {
  const trimmed = input.trim();
  if (!trimmed) return '';

  return trimmed
    .toLowerCase()
    .split(/\s+/)
    .map((word) => (word[0]?.toUpperCase() ?? '') + word.slice(1))
    .join(' ');
};

/**
 * Converts a mixed-format identifier to camelCase.
 *
 * @returns A camel-cased string.
 */
export const toCamelCase = (input: string): string => {
  return input
    .replace(/[-_\s]+(.)?/g, (_, character: string | undefined) => (character ? character.toUpperCase() : ''))
    .replace(/^(.)/, (character) => character.toLowerCase());
};

/**
 * Converts a mixed-format identifier to PascalCase.
 *
 * @returns A Pascal-cased string.
 */
export const toPascalCase = (input: string): string => {
  const camelCased = toCamelCase(input);
  return capitalize(camelCased);
};

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
