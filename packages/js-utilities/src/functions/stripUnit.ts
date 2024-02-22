/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */
export const VALUE_REGEX = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;

type StripUnitReturns = (string | number)[] | (string | undefined)[];

/**
 * Removes CSS units from a string-based value
 *
 * @param {string | number} value
 * @returns {StripUnitReturns}
 */
export function stripUnit(value: string | number): StripUnitReturns {
  if (typeof value !== "string") {
    return [value, ""];
  }
  const matchedValue = VALUE_REGEX.exec(value);

  if (matchedValue) {
    return [parseFloat(value), matchedValue[2]];
  }
  return [value, undefined];
}
