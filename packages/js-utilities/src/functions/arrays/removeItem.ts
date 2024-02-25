/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import { throwError } from "../../../src/functions";

/**
 * Removes an item from a source array
 */
export function removeItem<Source>(array: Source[], item: Source): Source[] {
	if (!Array.isArray(array)) {
		throwError("js-utilities", "removeItem", "Please pass a valid array as a parameter");
	}

	return array.filter((eachItem) => eachItem !== item);
}
