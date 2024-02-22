/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import {
	useCallback,
	useRef,
	useContext,
	useEffect,
	RefObject,
	KeyboardEvent,
	useMemo,
} from "react";
import { RoverContext } from "../containers/context";
import {
	ActionType,
	EventKey,
	UseRoverReturns,
	TabStop,
	UEventKey,
	UseRoverOptions,
} from "../types";
import { isEmpty, isObject } from "@jtmdias/js-utilities";
import { makeId } from "../../../helpers/make-id";

let counter = 0;

function uniqueId(): string {
	return makeId("react-a11y-tools-rover", ++counter);
}

/**
 * Implements the roving tabindex logic on a single tab stop.
 *
 * @example
 *
 * ```jsx
 * import { useRover } from "@jtmdias/react-a11y-tools";
 * ...
 * // Simple configuration of the hook
 * const [tabIndex, focused, handleOnRoverKeyDown, handleOnClick, context] = useRover(yourRef, false);
 * ...
 * // Disabled item with the second parameter as options
 * const [tabIndex, focused, handleOnRoverKeyDown, handleOnClick, context] = useRover(yourRef, {
 * 	disabled: true,
 * });
 * ...
 * // Full configuration of the hook
 * const [tabIndex, focused, handleOnRoverKeyDown, handleOnClick, context] = useRover(yourRef, {
 * 	rowIndex: 2
 * 	disabled: true,
 * 	lockScrollOnRover: true,
 * });
 * ```
 */
export function useRover(
	domElementRef: RefObject<Element>,
	options: boolean | UseRoverOptions = false,
): UseRoverReturns {
	const OPTIONS_CONFIG = useMemo(() => {
		const HAS_OPTIONS_AS_OBJECT = !!(isObject(options) && !isEmpty(options));
		if (HAS_OPTIONS_AS_OBJECT) {
			return {
				disabled: options.disabled,
				rowIndex: options.rowIndex ? options.rowIndex : null,
			};
		}
		return {
			disabled: options as boolean,
			rowIndex: null,
		};
	}, [options]);

	// Create a stable ID for the lifetime of the component:
	const ROVER_ID_REF = useRef<string | null>(null);

	function getId() {
		if (!ROVER_ID_REF.current) {
			ROVER_ID_REF.current = uniqueId();
		}
		return ROVER_ID_REF.current;
	}

	const isMounted = useRef(false);
	const context = useContext(RoverContext);

	/**
	 * Registers the tap stop on mount and unregisters it on unmount
	 */
	useEffect(() => {
		const id = getId();

		const PAYLOAD = {
			id,
			domElementRef,
			rowIndex: OPTIONS_CONFIG.rowIndex,
			disabled: OPTIONS_CONFIG.disabled,
		} as TabStop;

		context.dispatch({
			type: ActionType.REGISTER_TAB_STOP,
			payload: PAYLOAD,
		});
		return (): void => {
			context.dispatch({
				type: ActionType.UNREGISTER_TAB_STOP,
				payload: { id },
			});
		};
	}, []);

	/**
	 * Update the tab stop data if rowIndex or disabled change.
	 * The `isMounted` flag is used to prevent this effect running
	 * on mount, which is benign but redundant (as the `REGISTER_TAB_STOP`
	 * action would have just been dispatched).
	 */
	useEffect(() => {
		if (isMounted.current) {
			context.dispatch({
				type: ActionType.TAB_STOP_UPDATED,
				payload: {
					id: getId(),
					rowIndex: OPTIONS_CONFIG.rowIndex,
					disabled: OPTIONS_CONFIG.disabled ? OPTIONS_CONFIG.disabled : false,
				},
			});
		} else {
			isMounted.current = true;
		}
	}, [OPTIONS_CONFIG.rowIndex, OPTIONS_CONFIG.disabled]);

	/**
	 * Create a stable callback function for handling key down events:
	 */
	const handleKeyDown = useCallback((event: KeyboardEvent) => {
		const key = EventKey[event.key as UEventKey];

		// If it is a non-mapped key, exit early
		if (!key) {
			return;
		}

		context.dispatch({
			type: ActionType.KEY_DOWN,
			payload: { id: getId(), key, ctrlKey: event.ctrlKey },
		});

		event.preventDefault();
	}, []);

	/**
	 * Create a stable callback function for handling click events
	 */
	const handleClick = useCallback(() => {
		context.dispatch({ type: ActionType.CLICKED, payload: { id: getId() } });
	}, []);

	// Determine if the current tab stop is the currently active one:
	const IS_SELECTED = getId() === context.state.selectedId;

	const tabIndex = IS_SELECTED ? 0 : -1;
	const focused = IS_SELECTED && context.state.allowFocusing;

	return [tabIndex, focused, handleKeyDown, handleClick, context];
}
