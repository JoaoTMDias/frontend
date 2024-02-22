/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { ReactElement, useEffect, useMemo, useReducer } from "react";
import { ActionType, Context, Options, RoverProviderProps } from "../types";
import { INITIAL_STATE, RoverContext } from "./context";
import { reducer } from "./reducer";
import { isEmpty, isNil, isObject } from "@jtmdias/js-utilities";

/**
 * Creates a roving tabindex context.
 */
export const Provider = ({ children, direction, options }: RoverProviderProps): ReactElement => {
	const ROVER_CONFIG = useMemo<Options>(() => {
		const HAS_DIRECTION = !isNil(direction);
		const HAS_OPTIONS = !!(isObject(options) && !isEmpty(options));

		switch (true) {
			case HAS_OPTIONS:
				// eslint-disable-next-line no-case-declarations
				const providerOptions = options as Options;

				return {
					focusOnClick: providerOptions.focusOnClick
						? providerOptions.focusOnClick
						: INITIAL_STATE.focusOnClick,
					direction: providerOptions.direction
						? providerOptions.direction
						: INITIAL_STATE.direction,
					loopAround: providerOptions.loopAround
						? providerOptions.loopAround
						: INITIAL_STATE.loopAround,
				};

			default:
			case HAS_DIRECTION:
				return {
					direction,
					focusOnClick: INITIAL_STATE.focusOnClick,
					loopAround: INITIAL_STATE.loopAround,
				} as Options;
		}
	}, [direction, options]);

	const [state, dispatch] = useReducer(reducer, {
		...INITIAL_STATE,
		...ROVER_CONFIG,
	});

	// Update the options whenever they change:
	useEffect(() => {
		dispatch({
			type: ActionType.OPTIONS_UPDATED,
			payload: {
				...ROVER_CONFIG,
			},
		});
	}, [ROVER_CONFIG?.direction, ROVER_CONFIG?.focusOnClick, ROVER_CONFIG?.loopAround]);

	// Create a cached object to use as the context value:
	const context = useMemo<Context>(() => ({ state, dispatch }), [state]);

	return <RoverContext.Provider value={context}>{children}</RoverContext.Provider>;
};
