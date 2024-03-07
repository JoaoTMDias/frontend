/* eslint-disable react-hooks/exhaustive-deps */
import { EffectCallback, useEffect } from "react";

/**
 * Runs an effect only once.
 *
 * @example
 * ```
 * import {useEffectOnce} from '@jtmdias/js-utilities';
 *
 * useEffectOnce(() => {
 *   console.log('This runs only one time, when mounting');
 *
 *   return () => {
 *     console.log('This runs only one time, when unmounting');
 *   }
 * });
 * ```
 */
export function useEffectOnce(effect: EffectCallback): void {
	useEffect(effect, []);
}
