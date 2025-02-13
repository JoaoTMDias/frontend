/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

/**
 * Checks if `value` is classified as a String primitive or object.
 *
 * @example
 *
 * isString('abc')
 * // true
 *
 * isString(1)
 * // false
 */
export function isString(value: unknown): value is string {
  return typeof value === "string" || value instanceof String;
}
