/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */
import { useEffect } from "react";
import { isFunction } from "../index";

/**
 * React lifecycle hook that calls mount and unmount callbacks, when component is mounted and un-mounted, respectively.
 *
 * @example
 * ```tsx
 * import { useLifecycle } from "@jtmdias/js-utilities/hooks";
 * ...
 * useLifecycle(
 *  () => console.log('runs on mount'),
 *  () => console.log('runs on unmount'),
 * );
 * ```
 */
export function useLifecycle(mount: () => void, unmount?: () => void) {
	useEffect(() => {
		if (mount && isFunction(mount)) {
			mount();
		}

		return () => {
			if (unmount) {
				unmount();
			}
		};
	}, []);
}
