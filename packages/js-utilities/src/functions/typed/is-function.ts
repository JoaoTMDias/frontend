/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

/**
 * Checks if `value` is classified as a Function object.
 *
 * @example
 * isFunction(function() {})  // true
 * isFunction(() => {})       // true
 * isFunction(class {})       // true
 * isFunction(/abc/)          // false
 * isFunction(null)           // false
 * isFunction(undefined)      // false
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}
