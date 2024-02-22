/**
* This file is open-source. This means that it can be reproduced in whole
* or in part, stored in a retrieval system transmitted in any form, or by
* any means electronic with my prior permission as an author and owner
* Please refer to the terms of the license agreement in the root of the project
*
 * (c) 2023 joaodias.me
*/
import { useCallback, useState } from "react";
import { useLiveRef } from "src/hooks";
import { applyState, defineSetNextState, isSetNextState } from "./helpers";
import { SetState } from "./types";

/**
 * Check if a component is controlled or uncontrolled and returns the correct
 * state value and setter accordingly. If the component state is controlled by
 * the app, the setter is an empty function.
 */
export function useControlledState<StateType>(
    defaultState: StateType | (() => StateType),
    state?: StateType,
    setState?: (value: StateType) => void,
): [StateType, SetState<StateType>] {
    const [localState, setLocalState] = useState(defaultState);
    const nextState = state !== undefined ? state : localState;

    const stateRef = useLiveRef(state);
    const setStateRef = useLiveRef(setState);
    const nextStateRef = useLiveRef(nextState);

    const setNextState = useCallback((prevValue: StateType) => {
        const setStateProp = setStateRef.current;

        if (setStateProp) {
            if (isSetNextState(setStateProp)) {
                setStateProp(prevValue);
            } else {
                const nextValue = applyState(prevValue, nextStateRef.current);

                nextStateRef.current = nextValue;
                setStateProp(nextValue);
            }
        }
        if (stateRef.current === undefined) {
            setLocalState(prevValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    defineSetNextState(setNextState);

    return [nextState, setNextState];
}
