/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/

/**
 * Checks wether the user is running the app on a browser
 * or under another type of environment. (node, for example)
 */
export const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
