/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import { cloneElement, isValidElement, ReactElement, Attributes, ReactNode } from "react";

/**
 * Type-safe clone element
 */
export function cloneValidElement<Props>(
    element: ReactElement<Props> | ReactNode,
    props?: Partial<Props> & Attributes,
    ...children: ReactNode[]
): ReactElement<Props> | ReactNode {
    return isValidElement(element) ? cloneElement(element, props, ...children) : element;
}
