import { isNil } from ".";

/**
 * Convert a value to an int if possible.
 *
 * @example
 *
 * import { toInt } from '@jtmdias/js-utilities';
 *
 * toInt(0)
 * // => 0
 *
 * toInt(null)
 * // => 0
 *
 * toInt(null, 3)
 * // => 3
 */
export function toInt<T extends number | null = number>(value: any, defaultValue?: T): number | T {
	const def = defaultValue === undefined ? 0 : defaultValue;
	if (isNil(value)) {
		return def;
	}
	const result = parseInt(value);
	return isNaN(result) ? def : result;
}

/**
 * Computes `number` rounded to `precision`.
 *
 * @example
 *
 * round(4.006)
 * // => 4
 *
 * round(4.006, 2)
 * // => 4.01
 *
 * round(4060, -2)
 * // => 4100
 */
export function round(number: number, precision = 0): number {
	const modifier = 10 ** precision;
	return Math.round(number * modifier) / modifier;
}
