/*
 * Please refer to the terms of the license agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */

type AsProp<GenericComponent extends React.ElementType> = {
	/**
	 * An override of the default HTML tag.
	 * Can also be another React component.
	 */
	as?: GenericComponent
}

/**
 * Common HTML Element types.
 *
 * Accepts a type of element tag, like `"div"`, `"span"`, `"p"`
 */
export type CommonElement<GenericElement extends React.ElementType = "div"> = React.HTMLAttributes<HTMLElement> & {
	/**
	 * A `data-attribute` identifier for testing purposes
	 *
	 * @type {string}
	 * @memberof CommonElement
	 */
	"data-testid"?: string;
} & AsProp<GenericElement>

/**
 * Creates a tuple from a readonly object.
 * A tuple is a pre-defined array of options.
 *
 * @example
 *
 * export const IconPosition = {
 *  left: 'left',
 *  right: 'right',
 * } as const;
 *
 * const IconPositionTuple = tuple(IconPosition.left, IconPosition.right); // ["left", "right"]
 *
 * type IconPosition = TupleToUnion<typeof IconPositionTuple> // "left" | "right"
 */
export function tuple<T extends string[]>(...args: T) {
	return args;
  }

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
