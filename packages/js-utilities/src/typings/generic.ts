/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */
import { PropsWithChildren } from "react";

export interface GenericComponentProps {
	/**
	 * A Unique identifier for a component or `DOM` element
	 */
	id?: string;

	/**
	 * Extra CSS classes to add to the component
	 */
	className?: string;

	/**
	 * A boolean attribute which is present if the component should be disabled
	 */
	disabled?: boolean;

	/**
	 * The aria-label attribute is used to define a string that labels the current element.
	 * Use it in cases where a text label is not visible on the screen.
	 * If there is visible text labeling the element, use aria-labelledby instead.
	 */
	"aria-label"?: string;

	/**
	 * A `data-attribute` identifier for testing purposes
	 */
	"data-testid"?: string;

	/**
	 * The tabindex global attribute indicates that its element can be focused,
	 * and where it participates in sequential keyboard navigation (usually with the `tab` key, hence the name).
	 */
	tabIndex?: number;

	/**
	 * Custom CSS Styles
	 */
	style?: React.CSSProperties;

	/**
	 * An element must be filled with content
	 */
	required?: React.HTMLAttributes<HTMLElement>["aria-required"];
}

export type GenericComponentPropsWithChildren = PropsWithChildren<GenericComponentProps>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericAnyFunction = (...args: any) => any;

export type GlobalPartial<T> = Partial<T>;
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
export type PartialObject<T> = GlobalPartial<T>;
export type Many<T> = T | ReadonlyArray<T>;
export type PropertyName = string | number | symbol;
export type PropertyPath = Many<PropertyName>;
export type ObjTypeWithAny = Record<string, any>;
export type StringPropertyPath = Many<string>;
export interface NumericDictionary<T> {
	[index: number]: T;
}
export type PromiseValues<T extends Promise<any>[]> = {
	[K in keyof T]: T[K] extends Promise<infer U> ? U : never;
};

/**
 * Creates a union type from a tuple
 *
 * @example
 *
 * const IconPositionEnum = ["left" | "right"];
 *
 * type IconPosition = TupleToUnion<typeof IconPositionEnum> // "left" | "right"
 */
export type TupleToUnion<T extends [...unknown[]]> = T[number];
