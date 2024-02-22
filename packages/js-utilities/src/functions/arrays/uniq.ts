/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/

/**
 * Creates a duplicate-free version of an array, in which only the first occurrence of each element is kept. The order of result values is determined by the order they occur in the array.
 *
 * @example
 *
 * uniq([2, 1, 2])
 * // => [2, 1]
 *
 * @param array
 * @returns
 */
export function uniq<T>(array: T[]): T[] {
    return [
        ...new Set(array)
    ]
}
