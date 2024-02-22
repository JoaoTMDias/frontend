/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/

/**
 * Adds a data attribute to a DOM element, without its state bein rendered as a value
 *
 * @example
 *
 * <Button data-attribute={toggleDataAttribute(someprop)}>Content</Button>
 *
 * would render:
 *
 * <button data-attribute>Content</button>
 *
 * @param {boolean | null | undefined} prop
 * @returns {string | undefined}
 */
export function toggleDataAttribute(prop?: "true" | "false" | boolean | null): string | undefined {
    const isTrue = prop && (prop === true || prop === "true");

    return isTrue ? "" : undefined;
}
