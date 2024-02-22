import { useEffectOnce } from "./useEffectOnce";

/**
 * React lifecycle hook that calls a function after the component is mounted.
 *
 * @example
 * ```
 * import { useMount } from "@jtmdias/js-utilities";
 * ...
 * useMount(() => {
 *  console.log("the component has mounted");
 * });
 * ```
 */
export function useMount(callback: () => void) {
  useEffectOnce(() => {
    callback();
  });
};
