/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

/**
 * Helper interface for a cancelable promise that uses AbortController
 */
export interface MakeCancelablePromise<T = unknown> {
	/**
	 * The wrapped promise that can be aborted
	 */
	promise: Promise<T>;
	/**
	 * Aborts the promise execution
	 */
	cancel: () => void;
}

/**
 * Helper method that wraps a normal Promise and allows it to be cancelled using AbortController.
 *
 * @example
 * ```ts
 * import { wait } from "@jtmdias/js-utilities";
 *
 * // Create a Promise that resolves after 1 second
 * const somePromise = wait(1000);
 *
 * // Make it cancelable
 * const cancelable = makeCancelable(somePromise);
 *
 * // Execute the wrapped promise
 * cancelable.promise
 *   .then(console.log)
 *   .catch(error => {
 *     if (error.name === 'AbortError') {
 *       console.log('Promise was cancelled');
 *     } else {
 *       console.error('Other error:', error);
 *     }
 *   });
 *
 * // Cancel it when needed
 * cancelable.cancel();
 * ```
 *
 * @param promise The promise to make cancelable
 * @returns An object containing the wrapped promise and a cancel function
 */
export function makeCancelable<T = unknown>(promise: Promise<T>): MakeCancelablePromise<T> {
	const controller = new AbortController();

	const wrappedPromise = new Promise<T>((resolve, reject) => {
		// Add abort signal listener
		controller.signal.addEventListener("abort", () => {
			reject(new DOMException("Promise aborted", "AbortError"));
		});

		// Execute the original promise
		promise
			.then((value) => {
				// Only resolve if not aborted
				if (!controller.signal.aborted) {
					resolve(value);
				}
			})
			.catch((error) => {
				// Only reject if not aborted
				if (!controller.signal.aborted) {
					reject(error);
				}
			});
	});

	return {
		promise: wrappedPromise,
		cancel() {
			controller.abort();
		},
	};
}
