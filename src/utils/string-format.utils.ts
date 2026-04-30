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
