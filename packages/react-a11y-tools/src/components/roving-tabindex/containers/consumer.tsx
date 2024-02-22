/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import React from "react";
import { State, Action } from "../types";
import { RoverContext } from "./context";

/**
 * A Context API wrapper suitable for class-based components, where `useRover` hook is not possible.
 *
 * @example
 * <RoverConsumer>
 * 		{(state, dispatch) => { ...your content goes here }}
 * </RoverConsumer>
 */
export function RoverConsumer({
	children,
}: {
	children: (state: State, dispatch: React.Dispatch<Action>) => React.ReactElement;
}) {
	return (
		<RoverContext.Consumer>
			{({ state, dispatch }) => children(state, dispatch)}
		</RoverContext.Consumer>
	);
}

RoverConsumer.displayName = "RoverConsumer";
