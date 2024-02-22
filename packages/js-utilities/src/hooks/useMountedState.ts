import { useCallback, useEffect, useRef } from 'react';

/**
 * Lifecycle hook providing ability to check component's mount state.
 * Returns a function that will return true if component mounted and false otherwise.
 *
 * @example
 * ```
 * import { useMountedState } from "@jtmdias/js-utilities";
 * ...
 * const isMounted = useMountedState();
 *
 * useEffect(() => {
 *  if (isMounted()) {
 *   console.log("run something because the component is mounted");
 *  }
 * });
 * ```
 */
export function useMountedState(): () => boolean {
  const mountedRef = useRef<boolean>(false);
  const getState = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return getState;
}
