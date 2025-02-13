/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */
import { MutableRefObject, useEffect, useState } from "react";
import { off, on } from "../../functions";
import { UsePermissionState } from "./types";

/**
 * Tracks a permission state.
 * - SSR-compatible
 * - Automatically updates on permission state change.
 *
 * @example
 * ```tsx
 * import { usePermission } from '@jtmdias/js-utilities/hooks';
 * ...
 * const status = usePermission({ name: 'notifications' });
 *
 * return (
 *  <>
 *   <p>Notifications status: <code>{status}</code></p>
 *   {status === 'prompt' && (
 *     <button type="button" onClick={() => Notification.requestPermission()}>
 *       Request notifications permission
 *     </button>
 *   )}
 *  </>
 * );
 * ```
 *
 * @param descriptor Permission request descriptor that passed to `navigator.permissions.query`
 */
export function usePermission(descriptor: PermissionDescriptor): UsePermissionState {
	const [state, setState] = useState<UsePermissionState>("not-requested");

	useEffect(() => {
		const unmount: MutableRefObject<(() => void) | null> = { current: null };

		setState("requested");

		navigator.permissions.query(descriptor).then((status): void => {
			const handleChange = () => {
				setState(status.state);
			};

			setState(status.state);
			on(status, "change", handleChange, { passive: true });

			unmount.current = () => {
				off(status, "change", handleChange);
			};
		});

		return () => {
			if (unmount.current) {
				unmount.current();
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [descriptor.name]);

	return state;
}
