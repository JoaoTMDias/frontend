/* istanbul ignore file */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { createContext } from "react";
import { emptyFunction } from "@jtmdias/js-utilities";
import { State, Context } from "../types";

export const INITIAL_STATE: State = {
	allowFocusing: false,
	direction: "horizontal",
	focusOnClick: true,
	loopAround: true,
	rowStartMap: null,
	selectedId: null,
	tabStops: [],
};

export const RoverContext = createContext<Context>({
	state: INITIAL_STATE,
	dispatch: emptyFunction,
});

RoverContext.displayName = "RoverContext";
