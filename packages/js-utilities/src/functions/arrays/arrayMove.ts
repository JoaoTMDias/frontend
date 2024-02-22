/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/

/**
 * return a re-ordered array given 2 indexes: the old index and the new index
 */
export function arrayMove<Source>(array: Source[], fromIndex: number, toIndex: number): Source[] {
    const orderedArray = [...array];
    const startIndex = fromIndex < 0 ? orderedArray.length + fromIndex : fromIndex;

    if (startIndex >= 0 && startIndex < orderedArray.length) {
        const endIndex = toIndex < 0 ? orderedArray.length + toIndex : toIndex;

        const [item] = orderedArray.splice(fromIndex, 1);

        orderedArray.splice(endIndex, 0, item);
    }
    return orderedArray;
}
