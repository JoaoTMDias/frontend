import { isNil } from ".";

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @example
 *
 * escapeRegExp('[github](https://github.com/)')
 * // => '\[github\]\(https://github\.com/\)'
 */
export function escapeRegExp(string = "") {
  return string && reHasRegExpChar.test(string)
    ? string.replace(reRegExpChar, "\\$&")
    : string || "";
}

// Regex explained: https://regexr.com/5c55v
const kcRegex = /([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g;

/**
 * Converts string to kebab case.
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 *
 * kebabCase(null)
 * // => ''
 *
 * kebabCase('UPPERCASE')
 * // => 'uppercase'
 *
 * kebabCase(false)
 * // => 'false'
 *
 * kebabCase(undefined)
 * // => ''
 *
 * kebabCase(0)
 * // => '0'
 *
 * kebabCase('camelCase')
 * // => 'camel-case'
 *
 * kebabCase('?')
 * // => ''
 *
 * kebabCase('Custom*XML*Parser')
 * // => 'custom-xml-parser'
 *
 * kebabCase('APIFinder')
 * // => 'api-finder'
 *
 * kebabCase('UserAPI20Endpoint')
 * // => 'user-api-20-endpoint'
 *
 * kebabCase('30fghIJ')
 * // => '30-fgh-ij'
 */
export function kebabCase(str: string): string {
  const MatchingValue = String(str ?? "").match(kcRegex) || [];

  return MatchingValue.map((char) => char.toLowerCase()).join("-");
}

/**
 * Capitalize the first word of the string
 *
 * @example
 *
 * capitalize('hello')   -> 'Hello'
 * capitalize('va va voom') -> 'Va va voom'
 */
export function capitalize(str: string): string {
  if (!str || str.trim().length === 0) return "";
  const lower = str.toLowerCase();
  return lower.substring(0, 1).toUpperCase() + lower.substring(1, lower.length);
}

/**
 * Formats the given string in camel case fashion
 *
 * @example
 *
 * camelCase('hello world')   -> 'helloWorld'
 * camelCase('va va-VOOM') -> 'vaVaVoom'
 * camelCase('helloWorld') -> 'helloWorld'
 */
export function camelCase(str: string): string {
  if (isNil(str)) {
    return "";
  }

  const parts =
    str
      ?.replace(/([A-Z])+/g, capitalize)
      ?.split(/(?=[A-Z])|[\.\-\s_#$%&@]/) // Include # in the split characters
      .filter((x) => x)
      .map((x) => x.toLowerCase()) ?? [];
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  return parts.reduce((acc, part) => {
    return `${acc}${part.charAt(0).toUpperCase()}${part.slice(1)}`;
  });
}

/**
 * Formats the given string in pascal case fashion
 *
 * @example
 * pascalCase('hello world') -> 'HelloWorld'
 * pascalCase('va va boom') -> 'VaVaBoom'
 */
export function pascalCase(str: string): string {
  const parts =
    str
      ?.split(/[\.\-\s_#$%&@]/)
      .filter((x) => x)
      .map((x) => x.toLowerCase()) ?? [];
  if (parts.length === 0) return "";
  return parts.map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join("");
}

/**
 * Formats the given string in title case fashion
 *
 * @example
 * titleCase('hello world') -> 'Hello World'
 * titleCase('va_va_boom') -> 'Va Va Boom'
 * titleCase('root-hook') -> 'Root Hook'
 * titleCase('queryItems') -> 'Query Items'
 */
export function titleCase(str: string | null | undefined): string {
  if (!str) {
    return "";
  }

  return str
    .split(/(?=[A-Z])|[\.\-\s_#$%&@]/)
    .map((s) => s.trim())
    .filter((s) => !!s)
    .map((s) => capitalize(s.toLowerCase()))
    .join(" ");
}

/**
 * template is used to replace data by name in template strings.
 * The default expression looks for {{name}} to identify names.
 *
 * @example
 * Ex. template('Hello, {{name}}', { name: 'ray' })
 * Ex. template('Hello, <name>', { name: 'ray' }, /<(.+?)>/g)
 */
export function template(str: string, data: Record<string, any>, regex = /\{\{(.+?)\}\}/g) {
  if (isNil(str)) {
    return "";
  }

  return Array.from(str.matchAll(regex)).reduce((acc, match) => {
    return acc.replace(match[0], data[match[1]]);
  }, str);
}

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
  if (!str) return "";
  const toTrim = charsToTrim.replace(/[\W]{1}/g, "\\$&");
  const regex = new RegExp(`^[${toTrim}]+|[${toTrim}]+$`, "g");
  return str.replace(regex, "");
}
