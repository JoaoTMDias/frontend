/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2021 joaodias.me, Rights Reserved.
 */

/**
 * index.tsx
 *
 * @author João Dias <joao.dias@feedzai.com>
 * @since 1.0.0
 */
import React, { useRef } from "react";
import { makeId, CommonElement, PolymorphicComponentProps } from "@jtmdias/js-utilities";
import { useAutoId } from "@jtmdias/js-utilities/hooks";
import { visuallyHiddenStyle } from "./constants";

export type VisuallyHiddenProps<C extends React.ElementType> = PolymorphicComponentProps<
	C,
	CommonElement<C>
>;

const DEFAULT_ELEMENT_TAG = "span";

export const DEFAULT_PROPS: Partial<VisuallyHiddenProps<"span">> = {
	"data-testid": "js-visually-hidden",
};

/**
 * A utility component that can be used to hide its children visually,
 * while keeping them visible to screen readers and other assistive technology.
 *
 * @example
 *
 * // Rendering visually hidden text
 * <button type="button"><VisuallyHidden as="div">Press Enter to</VisuallyHidden>Return to Navigation</button>
 *
 * // Visually, it will be rendered a button with the text:
 * "Return to Navigation"
 *
 * // But a screen-reader will read as:
 * "Press Enter to Return to Navigation.button"
 *
 * @param {React.FC<CommonElement<HTMLSpanElement>>} props
 * @returns {JSX.Element}
 */
export const VisuallyHidden = <GenericElement extends React.ElementType = "span">({
	as,
	id,
	"data-testid": dataTestId = DEFAULT_PROPS["data-testid"],
	style,
	children,
	...props
}: VisuallyHiddenProps<GenericElement>) => {
	const autoId = useAutoId(id);
	const { current: generatedId } = useRef(makeId(dataTestId, autoId));
	const componentStyles: React.CSSProperties = {
		...visuallyHiddenStyle,
		...style,
	};
	const Component = as || DEFAULT_ELEMENT_TAG;

	return (
		<Component id={generatedId} data-testid={dataTestId} {...props} style={componentStyles}>
			{children}
		</Component>
	);
};
