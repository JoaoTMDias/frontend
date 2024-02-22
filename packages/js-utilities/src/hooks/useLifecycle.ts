import { useEffect } from 'react';
import { isFunction } from '../index';

/**
 * React lifecycle hook that calls mount and unmount callbacks, when component is mounted and un-mounted, respectively.
 *
 * @example
 * ```
 * import { useLifecycle } from "@jtmdias/js-utilities";
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
};
