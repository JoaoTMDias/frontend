import { isNil, isPrimitive } from "./typed";
import { toInt } from "./number";
import { ObjTypeWithAny } from "../../../src/typings";
import { flatten } from ".";

/**
 * Creates an array of values corresponding to paths of object.
 *
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * at(object, ['a[0].b.c', 'a[1]']);
 * // [3, 4]
 */
export function at(object: any, paths: string | string[]): any[] {
	const PATHS = Array.isArray(paths) ? paths : [paths];
	const FLATTENED_PATHS = flatten(PATHS, 1);

	const PATHS_LENGTH = FLATTENED_PATHS.length;
	const result = new Array(PATHS_LENGTH);
	const SHOULD_SKIP = object == null;

	/**
	 * It iterates over the flattenedPaths array.
	 * For each path, it:
	 *  - retrieves the corresponding value from the object using the get function.
	 *  - If object is null or undefined, it assigns undefined to the result array.
	 * The get function is used here to safely retrieve nested properties of the object.
	 */
	for (let index = 0; index < PATHS_LENGTH; index++) {
		result[index] = SHOULD_SKIP ? undefined : get(object, FLATTENED_PATHS[index]);
	}

	return result;
}

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 *
 * @example
 *
 * const object = { a: 1, b: '2', c: 3 };
 * omit(object, ['a', 'c'])
 * // => { 'b': '2' }
 */
export function omit<T, TKeys extends keyof T>(obj: T, keys: TKeys[]): Omit<T, TKeys> {
	if (!obj) {
		return {} as Omit<T, TKeys>;
	}

	if (!keys || keys.length === 0) {
		return obj as Omit<T, TKeys>;
	}

	return keys.reduce(
		(acc, key) => {
			// This is mutating the object, but we
			// are allowing it in this very limited scope due
			// to the performance implications of an omit func.
			delete acc[key];
			return acc;
		},
		{ ...obj }
	);
}

/**
 * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
 * in its place.
 *
 * @example
 *
 * const simpleObject = { a: { b: 2 } }
 * const complexObject = { a: [{ bar: { c: 3 } }] }
 * const falsyObject = { a: null, b: undefined, c: 0 }
 *
 * get(simpleObject, 'a.b')
 * // => 2
 *
 * get(complexObject, 'a[0].bar.c')
 * // => 3
 *
 * get(complexObject, ['a', '0', 'bar', 'c'])
 * // => 2
 *
 * get(simpleObject, 'a.bar.c', 'default')
 * // => 'default'
 *
 * get(complexObject, 'a.bar.c', 'default')
 * // =>  'default'
 *
 * get(complexObject, null)
 * // =>  undefined
 *
 * get(falsyObject, 'a', 'default')
 * // =>  null
 *
 * get(falsyObject, 'b', 'default')
 * // =>  undefined
 *
 * get(falsyObject, 'c', 'default')
 * // =>  zero
 *
 * @param object The object to query.
 * @param path The path of the property to get.
 * @param defaultValue The value returned if the resolved value is undefined.
 * @return Returns the resolved value.
 */
export function get<TDefault = unknown>(
	value: any,
	path: string,
	defaultValue?: TDefault
): TDefault | undefined {
	if (isNil(path)) {
		return;
	}

	const segments = Array.isArray(path) ? path : path.split(/[\.\[\]]/g);
	let current: any = value;
	for (const key of segments) {
		if (current === null) return defaultValue as TDefault;
		if (current === undefined) return defaultValue as TDefault;
		if (key.trim() === "") continue;
		current = current[key];
	}
	if (current === undefined) return defaultValue as TDefault;
	return current;
}
/**
 * Sets the value at path of object.
 * If a portion of path doesn’t exist, it’s created.
 * Arrays are created for missing index properties while objects are created for all other missing properties
 *
 * @example
 *
 * const object = { a: [{ bar: { c: 3 } }] }
 * set(object, 'a[0].bar.c', 4)
 * object.a[0].bar.c
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * object.x[0].y.z
 * // => 5
 */
export function set<T extends object, K>(initial: T, path: string, value: K): T {
	if (!initial) return {} as T;
	if (!path || value === undefined) return initial;
	const pathArray = Array.isArray(path) ? path : path.split(/[\.\[\]]/g);
	const segments = pathArray.filter((x) => !!x.trim());
	const _set = (node: any) => {
		if (segments.length > 1) {
			const key = segments.shift() as string;
			const nextIsNum = toInt(segments[0], null) === null ? false : true;
			node[key] = node[key] === undefined ? (nextIsNum ? [] : {}) : node[key];
			_set(node[key]);
		} else {
			node[segments[0]] = value;
		}
	};
	// NOTE: One day, when structuredClone has more
	// compatability use it to clone the value
	// https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
	const cloned = clone(initial);
	_set(cloned);
	return cloned;
}

/**
 * Creates a shallow copy of the given obejct/value.
 * @param {*} obj value to clone
 * @returns {*} shallow clone of the given value
 */
export function clone<T>(obj: T): T {
	// Primitive values do not need cloning.
	if (isPrimitive(obj)) {
		return obj;
	}

	// Binding a function to an empty object creates a
	// copy function.
	if (typeof obj === "function") {
		return obj.bind({});
	}

	// Access the constructor and create a new object.
	// This method can create an array as well.
	const newObj = new ((obj as object).constructor as { new (): T })();

	// Assign the props.
	Object.getOwnPropertyNames(obj).forEach((prop) => {
		// Bypass type checking since the primitive cases
		// are already checked in the beginning
		(newObj as any)[prop] = (obj as any)[prop];
	});

	return newObj;
}

/**
 * Creates an object composed of the picked object properties.
 *
 * @example
 *
 * const object = {
 *  a: 1,
 *  b: 2,
 *  c: 3,
 * }
 *
 * pick(object, ['a', 'c'])
 * // => {a: 1, c: 3}
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
	const picked: Partial<T> = {};

	if (!isNil(obj)) {
		keys.forEach((key) => {
			if (obj.hasOwnProperty(key)) {
				picked[key] = obj[key];
			}
		});
	}

	return picked as Pick<T, K>;
}

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @example
 *
 * const object = { a: { bar: 2 } }
 *
 * has(object, 'a')
 * // => true
 *
 * has(object, 'a.bar')
 * // => true
 *
 * has(object, ['a', 'bar'])
 * // => true
 *
 * has(object, ['a', 'c'])
 * // => false
 */
export function has(obj: ObjTypeWithAny, path: string | string[]): boolean {
	if (isNil(obj) || isNil(path)) {
		return false;
	}

	const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g);

	return !!pathArray?.reduce((prevObj: ObjTypeWithAny | undefined, key: string) => {
		return prevObj && prevObj[key];
	}, obj);
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 */
export const isEqual = <TType>(x: TType, y: TType): boolean => {
	if (Object.is(x, y)) return true;
	if (x instanceof Date && y instanceof Date) {
		return x.getTime() === y.getTime();
	}
	if (x instanceof RegExp && y instanceof RegExp) {
		return x.toString() === y.toString();
	}
	if (typeof x !== "object" || x === null || typeof y !== "object" || y === null) {
		return false;
	}
	const keysX = Reflect.ownKeys(x as unknown as object) as (keyof typeof x)[];
	const keysY = Reflect.ownKeys(y as unknown as object);
	if (keysX.length !== keysY.length) return false;
	for (let i = 0; i < keysX.length; i++) {
		if (!Reflect.has(y as unknown as object, keysX[i])) return false;
		if (!isEqual(x[keysX[i]], y[keysX[i]])) return false;
	}
	return true;
};
