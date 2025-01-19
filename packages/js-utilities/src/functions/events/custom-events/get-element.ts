/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

import { isBrowser } from "../../browsers/index";

export const getElement = (function () {
	const targetElement = isBrowser ? document.createElement("div") : null;

	return function () {
		return targetElement;
	};
})();
