/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

/**
 * Removes an item from an array by its index
 */
export function removeIndex<Source>(array: Source[], index: number): Source[] {
  return array.filter((_, idx) => idx !== index);
}
