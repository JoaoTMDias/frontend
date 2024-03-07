/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import { MutableRefObject, useEffect, useState } from "react";
import { off, on } from "../../../src/functions";
import { UsePermissionState } from "./types";

/**
 * Tracks a permission state.
 * - SSR-compatible
 * - Automatically updates on permission state change.
 *
 * @example
 * const status = usePermission({ name: 'notifications' });

  return (
    <div>
      <div>
        Notifications status: <code>{status}</code>
      </div>
      <div>
        {status === 'prompt' && (
          <button
            onClick={() => {

              Notification.requestPermission();
            }}>
            Request notifications permission
          </button>
        )}
      </div>
    </div>
  );
 *
 * @param descriptor Permission request descriptor that passed to `navigator.permissions.query`
 */
export function usePermission(descriptor: PermissionDescriptor): UsePermissionState {
	const [state, setState] = useState<UsePermissionState>("not-requested");

	useEffect(() => {
		const unmount: MutableRefObject<(() => void) | null> = { current: null };

		setState("requested");

		// eslint-disable-next-line @typescript-eslint/no-floating-promises,promise/catch-or-return
		navigator.permissions
			.query(descriptor)
			// eslint-disable-next-line promise/always-return
			.then((status): void => {
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
