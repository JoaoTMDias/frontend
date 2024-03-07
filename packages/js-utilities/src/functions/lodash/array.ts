import { ObjTypeWithAny } from "../../../src/typings";

/**
 * Checks if `n` is between `start` and up to, but not including, `end`.
 *
 * If `end` is not specified, it’s set to start with `start` then set to 0. If `start` is greater than `end` the params are swapped to support negative ranges.
 *
 * @example
 *
 * inRange(3, 2, 4)
 * // => true
 *
 * inRange(4, 8)
 * // => true
 *
 * inRange(4, 2)
 * // => false
 *
 * inRange(2, 2)
 * // => false
 *
 * inRange(1.2, 2)
 * // => true
 *
 * inRange(5.2, 4)
 * // => false
 *
 * inRange(-3, -2, -6)
 * // => true
 */
export function inRange(num: number, rangeStart: number, rangeEnd = 0): boolean {
	return (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart);
}

type Iteratee<T> = keyof T | ((item: T) => any);

/**
 * This method is like `uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).

 * @example
 *
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
export function uniqBy<T>(arr: T[], iteratee: Iteratee<T>): T[] {
	const getKey = (item: T): any => {
		if (typeof iteratee === "function") {
			return iteratee(item);
		}

		return item[iteratee];
	};

	const uniqueKeys = new Set<any>();

	return arr.filter((item) => {
		const key = getKey(item);
		if (uniqueKeys.has(key)) {
			return false;
		} else {
			uniqueKeys.add(key);
			return true;
		}
	});
}

/**
 * Checks if value is in collection.
 * If collection is a string, it’s checked for a substring of value.
 *
 * @example
 *
 * includes([1, 2, 3], 1)
 * // => true
 */
export function includes<T>(array: T[], value: any): boolean {
	return array.includes(value);
}

/**
 * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level.
 *
 * @example
 *
 * flatMap([1, 2], n => [n, n])
 * // => [1, 1, 2, 2]
 */
export function flatMap<T>(arr: T[], callback: (value: T, index: number, array: T[]) => T[]): T[] {
	return arr.reduce((acc, value, index, array) => {
		const mappedValues = callback(value, index, array);
		return acc.concat(mappedValues as any);
	}, []) as T[];
}

/**
 * Flattens array a certain number of levels deep.
 *
 * It can do it up to a certain depth or recursively.
 *
 * @example
 *
 * const array = [1, [2, [3, [4]], 5]]
 *
 * flatten(array, 5]])
 * // => [1, 2, [3, [4]], 5]
 *
 * flatten(array, true)
 * // => [1, 2, 3, 4, 5]
 *
 * flattenDepth(array, 1)
 * // => [1, 2, [3, [4]], 5]
 *
 * flattenDepth(array, 2)
 * // => [1, 2, 3, [4], 5]
 */
export function flatten<T>(arr: T[], level?: number | boolean) {
	if (typeof level === "boolean") {
		return arr.flat(level ? Infinity : 1);
	}

	if (typeof level === "number" && level >= 0) {
		// Check if level is a non-negative number
		return arr.flat(level);
	}

	return arr.flat();
}

/**
 * Iterates over elements of collection, returning the first element predicate returns truthy for.
 * The predicate is invoked with three arguments: (value, index|key, collection).
 *
 * @example
 *
 * const users = [
 *  { user: 'barney', age: 36, active: true },
 *  { user: 'fred', age: 40, active: false },
 *  { user: 'pebbles', age: 1, active: true },
 * ]
 *
 * find(users, o => o.age < 40)
 * // => { user: "barney", age: 36, active: true }
 */
export function find<T>(
	arr: T[],
	predicate: (value: T, index: number, obj: T[]) => unknown
): T | undefined {
	return arr.find(predicate);
}

/**
 * This method is like find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
 *
 * @example
 *
 * const users = [
 *  { user: 'barney', age: 36, active: true },
 *  { user: 'fred', age: 40, active: false },
 *  { user: 'pebbles', age: 1, active: true },
 * ]
 *
 * findIndex(users, o => o.age >= 40)
 * // => 1
 */
export function findIndex<T>(
	arr: T[],
	predicate: (value: T, index: number, obj: T[]) => unknown
): number {
	return arr.findIndex(predicate);
}

/**
 * Creates an array of elements split into groups the length of size.
 * If array can’t be split evenly, the final chunk will be the remaining elements.
 *
 * @example
 *
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
 * // => [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']]
 *
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 3)
 * // => [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]
 *
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 0)
 * // => []
 *
 * chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g'], -1)
 * // => []
 */
export function chunk<T>(arr: T[], chunkSize: number = 1): T[][] {
	if (!Array.isArray(arr) || arr.length === 0 || chunkSize <= 0) {
		return [];
	}

	const chunks: T[][] = [];

	for (let i = 0; i < arr.length; i += chunkSize) {
		chunks.push(arr.slice(i, i + chunkSize));
	}
	return chunks;
}

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 */
export function groupBy<T, K>(collection: T[], iteratee: (element: T) => K): Record<string, T[]> {
	const groups: Record<string, T[]> = {};

	collection.forEach((element) => {
		const key = String(iteratee(element));
		if (!groups[key]) {
			groups[key] = [];
		}
		groups[key].push(element);
	});

	return groups;
}

/**
 * This method is like `assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object.
 *
 * Source properties that resolve to `undefined` are
 * skipped if a destination value exists.
 *
 * Array and plain object properties are merged recursively.
 *
 * Other objects and value types are overridden by
 * assignment.
 *
 * Source objects are applied from left to right.
 *
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @example
 *
 * const object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * }
 *
 * const other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * }
 *
 * merge(object, other)
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
export function merge<T extends ObjTypeWithAny, U extends ObjTypeWithAny>(
	target: T,
	source: U
): T & U {
	const merged: any = { ...target };

	for (const key in source) {
		if (
			typeof source[key] === "object" &&
			source[key] !== null &&
			!Array.isArray(source[key])
		) {
			merged[key] = merge(target[key] ?? {}, source[key]);
		} else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
			// Merge arrays recursively @ts-ignore
			merged[key] = target[key].map((item: any, index: number) =>
				merge(item, source[key][index])
			);
		} else {
			merged[key] = source[key];
		}
	}

	return merged as T & U;
}
