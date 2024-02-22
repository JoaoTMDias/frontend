/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/

/**
 * Helper function to throw errors with the following string template <fileName>.<functionName>:<errorMsg>.
 *
 * @param {string} fileName Holds the file name.
 * @param {string} functionName Holds the function name.
 * @param {string} errMsg Holds the error message.
 * @returns {void}
 */
export function throwError(fileName: string, functionName: string, errMsg: string): void {
    const errorMessage = `${fileName}.${functionName}: ${errMsg}`;

    throw new Error(errorMessage);
}
