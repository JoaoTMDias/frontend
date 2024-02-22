/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import { MutableRefObject, useRef, useLayoutEffect } from "react";

/**
 * Creates a `React.RefObject` that is constantly updated with the incoming
 * value.
 * @example
 * function Component({ prop }) {
 *   const propRef = useLiveRef(prop);
 * }
 */
export function useLiveRef<T>(value: T): MutableRefObject<T> {
    const ref = useRef(value);

    useLayoutEffect(() => {
        ref.current = value;
    });

    return ref;
}
