/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

import { EffectCallback, useEffect } from "react";

/**
 * Runs an effect only once.
 *
 * @example
 * ```tsx
 * import {useEffectOnce} from '@jtmdias/js-utilities/hooks';
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
