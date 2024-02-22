import { KEY } from "@jtmdias/js-utilities";
import { ReactNode } from "react";
import { TupleToUnion, tuple } from "../../typings/common";

export const EventKey = {
	ArrowLeft: KEY.ARROW_LEFT,
	ArrowRight: KEY.ARROW_RIGHT,
	ArrowUp: KEY.ARROW_UP,
	ArrowDown: KEY.ARROW_DOWN,
	Home: KEY.HOME,
	End: KEY.END,
} as const;

const EventKeyTuple = tuple(...Object.values(EventKey));

export type UEventKey = TupleToUnion<typeof EventKeyTuple>;

export type KeyDirection = "horizontal" | "vertical" | "both";

export const Navigation = {
	PREVIOUS: "PREVIOUS",
	NEXT: "NEXT",
	VERY_FIRST: "VERY_FIRST",
	VERY_LAST: "VERY_LAST",
	PREVIOUS_ROW: "PREVIOUS_ROW",
	NEXT_ROW: "NEXT_ROW",
	FIRST_IN_ROW: "FIRST_IN_ROW",
	LAST_IN_ROW: "LAST_IN_ROW",
} as const;

const NavigationTuple = tuple(...Object.values(Navigation));

export type UNavigation = TupleToUnion<typeof NavigationTuple>;

export type TabStop = Readonly<{
	id: string;
	domElementRef: React.RefObject<Element>;
	disabled: boolean;
	rowIndex?: number | null;
}>;

export type RowStartMap = Map<Exclude<TabStop["rowIndex"], null>, number>;

export type UseRoverOptions = {
	/**
	 * can be updated as appropriate to reflect the current enabled or disabled state of the component
	 */
	disabled?: boolean;

	/**
	 * An optional integer value that must be populated if the roving tabindex is being used in a grid.
	 * In that case, set it to the zero-based index of the row that the given DOM element
	 * is currently part of. You can update this row index as appropriate throughout the lifetime
	 * of the containing component, for example if the shape of the grid can change dynamically.
	 */
	rowIndex?: number | null;

	/**
	 * Prevents scrolling when performing rover navigation between items
	 */
	lockScrollOnRover?: boolean;
}

export type State = Readonly<{
	allowFocusing: boolean;

	/**
	* An optional direction value that only applies when the roving tabindex is
	* not being used within a grid. This value specifies the arrow key behaviour.
	* The default value is 'horizontal'.
	*
	* When set to 'horizontal' then only the ArrowLeft and ArrowRight
	* keys move to the previous and next tab stop respectively.
	* When set to 'vertical' then only the ArrowUp and ArrowDown keys
	* move to the previous and next tab stop respectively. When set
	* to 'both' then both the ArrowLeft and ArrowUp keys can be used
	* to move to the previous tab stop, and both the ArrowRight
	* and ArrowDown keys can be used to move to the next tab stop.
	* If you do not pass an explicit value then the 'horizontal'
	* behaviour applies.
	*/
	direction: KeyDirection;

	/**
	 * An optional flag for indicating if `focus()` should invoked on an item
	 * in the roving tabindex when it is clicked. The default value for this
	 * flag is `false`, meaning that `focus()` will not be invoked on click.
	 * Browsers are [inconsistent in their behaviour](https://zellwk.com/blog/inconsistent-button-behavior/)
	 * when a button is clicked so you will see some variation between
	 * the browsers with the default value. Prior to version 3 of this library,
	 * the behaviour was to always invoke `focus()` on click; this behaviour
	 * can be maintained by passing `true`.
	 */
	focusOnClick: boolean;

	/**
	 * An optional flag that,
	 * when set to `true`, will loop the tabindex around when the user
	 * tries to tab to the first or last elements in the roving tabindex,
	 * rather than stopping. The default value is `false` (no looping).
	 * Note that this option does not apply if the roving tabindex
	 * is being used on a grid.
	 *
	 * @default false
	 */
	loopAround: boolean;
	rowStartMap: RowStartMap | null;
	selectedId: string | null;
	tabStops: readonly TabStop[];
}>;

export type Options = Partial<Pick<State, "direction" | "focusOnClick" | "loopAround">>;

export enum ActionType {
	REGISTER_TAB_STOP = "REGISTER_TAB_STOP",
	UNREGISTER_TAB_STOP = "UNREGISTER_TAB_STOP",
	KEY_DOWN = "KEY_DOWN",
	CLICKED = "CLICKED",
	TAB_STOP_UPDATED = "TAB_STOP_UPDATED",
	OPTIONS_UPDATED = "OPTIONS_UPDATED",
}

export type Action =
	| {
			type: ActionType.REGISTER_TAB_STOP;
			payload: TabStop;
	  }
	| {
			type: ActionType.UNREGISTER_TAB_STOP;
			payload: { id: TabStop["id"] };
	  }
	| {
			type: ActionType.TAB_STOP_UPDATED;
			payload: {
				id: TabStop["id"];
				rowIndex: TabStop["rowIndex"];
				disabled: TabStop["disabled"];
			};
	  }
	| {
			type: ActionType.KEY_DOWN;
			payload: {
				id: TabStop["id"];
				key: UEventKey;
				ctrlKey: boolean;
			};
	  }
	| {
			type: ActionType.CLICKED;
			payload: { id: TabStop["id"] };
	  }
	| {
			type: ActionType.OPTIONS_UPDATED;
			payload: Options;
	  };

export type Context = Readonly<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>;

/**
 * Return array for the `useRover` hook
 */
export type UseRoverReturns = [
	number,
	boolean,
	(event: React.KeyboardEvent) => void,
	() => void,
	Context,
];

export type RoverProviderProps = {
	children: ReactNode;
	/**
	 * By default, it is the `ArrowLeft` and `ArrowRight` keys that are used to move to the previous and next item respectively.
	 * The `RoverProvider` has an optional direction property on the options prop that allows you to change this.
	 *
	 * @deprecated use the `options` prop instead
	 */
	direction?: KeyDirection;

	/**
	 * The RovingTabIndexProvider component includes an optional options prop for tailoring the behaviour of the library.
	 * There are currently three options available:
	 * - `direction`:
	 * - `focusOnClick`;
	 * - `loopAround`.
	 *
	 * Note that it is fine to create a new options object on every render - the library's internal state is only updated
	 * if the actual option values change, rather than the containing options object.
	 */
	options?: never;
} | {
	children: ReactNode;

	/**
	 * The RovingTabIndexProvider component includes an optional options prop for tailoring the behaviour of the library.
	 * There are currently three options available:
	 * - `direction`:
	 * - `focusOnClick`;
	 * - `loopAround`.
	 *
	 * Note that it is fine to create a new options object on every render - the library's internal state is only updated
	 * if the actual option values change, rather than the containing options object.
	 */
	options?: Options;

	/**
	 * By default, it is the `ArrowLeft` and `ArrowRight` keys that are used to move to the previous and next item respectively.
	 * The `RoverProvider` has an optional direction property on the options prop that allows you to change this.
	 *
	 * @deprecated use the `options` prop instead
	 */
	direction?: never;
}
