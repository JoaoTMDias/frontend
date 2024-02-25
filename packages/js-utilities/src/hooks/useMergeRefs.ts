/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import { useMemo } from "react";
import { isNil, isFunction, throwError } from "../../src/functions";

export type ReactRef<Generic> = React.RefCallback<Generic> | React.MutableRefObject<Generic>;
export type SingleRef<Generic> = ReactRef<Generic> | null | undefined;
export type MergedRefCallback<Generic> = (node: Generic | null) => void;

/**
 * Assigns values to each ref
 */
export function assignRef<Generic = HTMLElement>(ref: SingleRef<Generic>, value: Generic): void {
	if (isNil(ref)) {
		return;
	}

	if (isFunction(ref)) {
		ref(value);
		return;
	}

	try {
		ref.current = value;
	} catch (error) {
		throwError("helpers", "useMergeRefs", "Cannot assign value  to ref");
	}
}

/**
 * For each ref object, assigns the properties from both refs
 */
export function mergeRefs<Generic = HTMLElement>(
	firstRef: SingleRef<Generic>,
	secondRef: SingleRef<Generic>
): MergedRefCallback<Generic> {
	return (node: Generic | null): void => {
		assignRef(firstRef, node);
		assignRef(secondRef, node);
	};
}

/**
 * Returns a function that receives the element and assign the value to the given React refs.
 *
 * @example
 *
 * ```
 * // a div with multiple refs
 * function Example({ ref, ...props }) {
 *   const internalRef = React.useRef();
 *   const refs = useMergeRefs(internalRef, ref);
 *
 *   return (
 *     <div {...props} ref={refs}>
 *       A div with multiple refs.
 *     </div>
 *   );
 * }
 * ```
 */
export function useMergeRefs<Generic = HTMLElement>(
	firstRef: SingleRef<Generic>,
	secondRef: SingleRef<Generic>
): MergedRefCallback<Generic> {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	return useMemo(() => mergeRefs(firstRef, secondRef), [firstRef, secondRef]);
}
