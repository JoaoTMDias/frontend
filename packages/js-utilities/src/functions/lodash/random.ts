import { isArray, isBoolean, isNil, isUndefined } from "./typed";

/**
 * Produces a random number between the inclusive lower and upper bounds.
 * If only one argument is provided a number between 0 and the given number is returned.
 * If floating is true, or either lower or upper are floats, a floating-point number is returned instead of an integer.
 *
 * @example
 *
 * random(0, 5)
 * // => an integer between 0 and 5
 *
 * random(5)
 * // => also an integer between 0 and 5
 *
 * random(5, true)
 * // => a floating-point number between 0 and 5
 *
 * random(1.2, 5.2)
 * // => a floating-point number between 1.2 and 5.2
 *
 * random()
 * // => 0 or 1
 *
 * random(-1)
 * // => -1 or 0
 *
 * @export
 * @param {number} [lower=0]
 * @param {(number | boolean)} [upper]
 * @param {boolean} [floating]
 * @returns {number} a random number
 */
export function random(lower: number = 0, upper?: number | boolean, floating?: boolean): number {
	if (isBoolean(upper)) {
		floating = upper;
		upper = undefined;
	}

	if (isNaN(upper as number)) {
		upper = lower < 0 ? 0 : 1;
	}

	if (isUndefined(floating)) {
		floating = !Number.isInteger(lower) || !Number.isInteger(upper as number);
	}

	const randomNumber = Math.random() * ((upper as number) - lower) + lower;
	return floating ? randomNumber : Math.round(randomNumber);
}

/**
 * Draw a random item from a list. Returns null if the list is empty.
 *
 * This helper can also be useful for using inside tests where - given a list of possible outcomes - one is randomly selected.
 *
 * @example
 *
 * const characters = [
 * 	"Homer Simpson",
 * 	"Marge Simpson",
 * 	"Bart Simpson",
 * 	"Lisa Simpson",
 * 	"Maggie Simpson",
 * ];
 *
 * draw(characters)
 * // => a random Simpsons Character e.g "Bart Simpson"
 */
export function draw<T>(array: readonly T[]): T | null {
	const UPPER_VALUE = !isNil(array) && isArray(array) ? array.length : 0;

	if (UPPER_VALUE === 0) {
		return null;
	}

	const index = random(0, UPPER_VALUE - 1);

	return array[index];
}
