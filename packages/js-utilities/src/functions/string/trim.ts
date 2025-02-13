/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

/**
 * Trims all prefix and suffix characters from the given
 * string. Like the builtin trim function but accepts
 * other characters you would like to trim and trims
 * multiple characters.
 *
 * @example
 * ```typescript
 * trim('  hello ') // => 'hello'
 * trim('__hello__', '_') // => 'hello'
 * trim('/repos/:owner/:repo/', '/') // => 'repos/:owner/:repo'
 * trim('222222__hello__1111111', '12_') // => 'hello'
 * ```
 */
export function trim(str: string | null | undefined, charsToTrim: string = " ") {
  if (!str) {
    return "";
  }

  const toTrim = charsToTrim.replace(/[\W]{1}/g, "\\$&");
  const regex = new RegExp(`^[${toTrim}]+|[${toTrim}]+$`, "g");

  return str.replace(regex, "");
}
