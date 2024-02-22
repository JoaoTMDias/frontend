/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import { throwError } from "src/functions";

/**
 * Checks if `value` is an empty object or collection.
 *
 * @example
 *
 * isEmpty(null)
 * // true
 *
 * isEmpty('')
 * // true
 *
 * isEmpty({})
 * // true
 *
 * isEmpty([])
 * // true
 *
 * isEmpty({a: '1'})
 * // false
 */
export function isEmpty(value?: any): boolean {
  return [Object, Array].includes((value || {}).constructor) && !Object.entries(value || {}).length;
}

/**
 * Checks if a string is blank or not (empty, even with white spaces)
 * Nil values are also considered empty.
 *
 * @example
 *
 * isBlank("test")
 * // false
 *
 * isBlank("")
 * // true
 *
 * isBlank(" ")
 * // true
 *
 * isBlank(undefined)
 * // true
 *
 * isBlank(null)
 * // true
 *
 * isBlank()
 * // true
 */
export function isBlank(text: string): boolean {
  if (isNil(text)) {
    return true;
  }

  if (!isString(text)) {
    throwError("js-utilities", "isBlank", "This value is not a string");
  }

  return isEmpty(text.trim());
}

/**
 * Checks if `value` is the language type of `Object`.
 *
 * (e.g. arrays, functions, objects, regexes, new Number(0), and new String(’’))
 *
 * @example
 *
 * isObject({})
 * // true
 *
 * isObject([1, 2, 3])
 * // true
 *
 * isObject(() => {})
 * // true
 *
 * isObject(null)
 * // false
 */
export function isObject(value?: any): value is object {
  if (isNil(value)) {
    return false;
  }

  return value.constructor === Object;
}

/**
 * Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.
 *
 * @example
 *
 * isPlainObject({});
 * // true
 *
 * isPlainObject([]);
 * // false
 *
 * isPlainObject(null);
 * // false
 *
 * isPlainObject(new Date());
 * // false
 *
 * isPlainObject('string');
 * // false
 *
 * isPlainObject(123);
 * // false
 *
 * isPlainObject(Object.create(null));
 * // true
 */
export function isPlainObject(value?: any): value is object {
  if (isNil(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date.
 *
 * Note: Does not check that the input date is valid, only that it is a Javascript Date type.
 */
export const isDate = (value: any): value is Date => {
  return Object.prototype.toString.call(value) === "[object Date]";
};

/**
 * Determine if a value is a Promise
 *
 * Pass in a value and get a boolean telling you if the value is a Promise.
 * This function is not “bullet proof” because determining if a value is a Promise in javascript is not “bullet proof”.
 * The standard/recommended method is to use Promise.resolve to essentially cast any value, promise or not, into an awaited value.
 * However, this may do in a pinch.
 *
 * @example
 *
 * isPromise('hello')
 * // false
 *
 * isPromise(['hello'])
 * // false
 *
 * isPromise(new Promise(res => res()))
 * // true
 */
export const isPromise = (value: any): value is Promise<any> => {
  if (!value || !value.then || !isFunction(value.then)) {
    return false;
  }

  return true;
};

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
export function isString(value?: any): value is string {
  return typeof value === "string" || value instanceof String;
}

/**
 * Checks if `value` is classified as a Number primitive or object.
 *
 * @example
 *
 * isNumber(3)
 * // true
 *
 * isNumber(Number.MIN_VALUE)
 * // true
 *
 * isNumber(Infinity)
 * // true
 *
 * isNumber('3')
 * // false
 */
export function isNumber(value?: any): value is number {
  return typeof value === "number" || value instanceof Number;
}

export { isNumber as isInteger };

/**
 * Checks if the given value is primitive.
 *
 * Primitive Types: number , string , boolean , symbol, bigint, undefined, null
 *
 * @param {*} value value to check
 * @returns {boolean} result
 */
export function isPrimitive(value: any): boolean {
  return (
    value === undefined ||
    value === null ||
    (typeof value !== "object" && typeof value !== "function")
  );
}

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @example
 *
 * isBoolean(false)
 * // true
 *
 * isBoolean(null)
 * // false
 */
export function isBoolean(value?: any): value is boolean {
  return value === !!value || typeof value === "boolean" || value instanceof Boolean;
}

/**
 * Returns if value is a true boolean value or is a string boolean
 */
export function boolOrBoolString(value: any): value is "true" | true {
  return value === "true" ? true : isBoolean(value) ? value : false;
}

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
export function isArray(value?: any): value is Array<any> {
  return Array.isArray(value);
}

/**
 * Checks if `value` is classified as a String primitive or object.
 *
 * @example
 *
 * isFunction(function () {})
 * // true
 *
 * isFunction(() => {})
 * // true
 *
 * isFunction(class NotAFunction {})
 * // true
 *
 * isFunction(/abc/)
 * // false
 */
export function isFunction(value?: any): value is Function {
  return !!(value && value.constructor && value.call && value.apply);
}

/**
 * Checks if `value` is null or undefined.
 *
 * @example
 *
 * isNil(null)
 * // true
 *
 * isNil(undefined)
 * // true
 *
 * isNil(NaN)
 * // false
 */
export function isNil(value?: any): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Checks if `value` is null.
 *
 * @example
 *
 * isNull(null)
 * // true
 *
 * isNull(undefined)
 * // false
 */
export function isNull(value?: any): value is null {
  return value === null;
}

/**
 * Checks if `value` is undefined.
 *
 * @example
 *
 * isUndefined(undefined)
 * // true
 *
 * isUndefined(null)
 * // false
 */
export function isUndefined(value?: any): value is undefined {
  return value === undefined;
}

/**
 * Checks if `value` is likely a DOM element.
 *
 * @example
 *
 * isElement(document.body)
 * // true
 *
 * isElement('<body>')
 * // false
 */
export function isElement(value: any): value is Element {
  if (isNil(value)) {
    return false;
  }

  const IS_INSTANCE = value instanceof Element;
  const IS_OBJECT_ELEMENT =
    typeof value === "object" && value.nodeType === 1 && typeof value.nodeName === "string";
  return IS_INSTANCE || IS_OBJECT_ELEMENT;
}
