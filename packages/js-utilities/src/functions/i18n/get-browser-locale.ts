/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

/**
 * Returns the browser locale
 *
 * @returns {string}
 */
export function getBrowserLocale(): string {
  return Intl.DateTimeFormat().resolvedOptions().locale;
}
