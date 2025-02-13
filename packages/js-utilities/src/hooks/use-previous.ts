/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */
import { useEffect, useRef } from "react";

/**
 * React state hook that returns the previous state as described in the React hooks FAQ.
 * {@link https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state}
 *
 * @example
 * ```tsx
 * import { usePrevious } from '@jtmdias/js-utilities/hooks';
 * ...
 * function Component() {
 *  const [value, setValue] = useState(0);
 *  const previousValue = usePrevious(value);
 *
 *  return (
 *    <div>
 *      <span>{previousValue}</span>
 *      <button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
 *    </div>
 *  );
 * }
 * ```
 */
export function usePrevious<GenericType>(state: GenericType): GenericType | undefined {
	const ref = useRef<GenericType>();

	useEffect(() => {
		ref.current = state;
	});

	return ref.current;
}
