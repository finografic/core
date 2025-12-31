/**
 * Capitalizes the first character of a string.
 *
 * @returns The input string with its first character uppercased.
 */
export const capitalize = (value: string): string => {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

/**
 * Converts a string to title case.
 *
 * Words are split on whitespace and lowercased before capitalization.
 *
 * @returns A title-cased string.
 */
export const toTitleCase = (value: string): string => {
  return value
    .trim()
    .split(/\s+/)
    .map((word) => capitalize(word.toLowerCase()))
    .join(' ');
};

/**
 * Converts a camelCase string to kebab-case.
 *
 * @returns A kebab-cased string.
 */
export const camelCaseToKebab = (value: string): string => {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
};

/**
 * Converts a camelCase string into a human-readable sentence.
 *
 * @returns A sentence-cased string with spaces added.
 */
export const camelCaseToSentence = (value: string): string => {
  if (!value) return value;

  const withSpaces = value.replace(/([A-Z])/g, ' $1');
  return capitalize(withSpaces);
};
