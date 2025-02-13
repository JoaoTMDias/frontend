/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

/**
 * Checks if `value` is classified as an Array object.
 *
 * @example
 *
 * isArray([1, 2, 3])
 * // true
 *
 *  isArray(document.body.children)
 * // false
 *
 * isArray('abc')
 * // false
 */
export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}
