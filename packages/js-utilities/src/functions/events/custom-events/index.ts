/* istanbul ignore file */
/**
 * This file is open-source. This means that it can be reproduced in whole
 * or in part, stored in a retrieval system transmitted in any form, or by
 * any means electronic with my prior permission as an author and owner
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2023 joaodias.me
 */
import { useEffect } from "react";
import { isBrowser } from "src/functions";

const getElement = (function () {
  const targetElement = isBrowser ? document.createElement("div") : null;

  return function () {
    return targetElement;
  };
})();

declare global {
  interface Window {
    _customEventTargetElement: undefined | HTMLDivElement;
  }
}

export type EventHandler<T> = (data: T) => void;

/**
 * @typedef {(data: GenericType) => void} EventHandler
 */

/**
 * A custom hook that listens to a custom event and auto-cleans itself on unmount.
 *
 * @example
 * useCustomEventListener('a-custom-event-name', data => {
 * 	doSomethingWithData( data );
 * });
 */
export function useCustomEventListener<GenericType>(
  eventName: string,
  eventHandler: EventHandler<GenericType>
): void {
  useEffect(() => {
    const element = getElement();
    const handleEvent = (event: CustomEvent | Event) => {
      const data = (event as CustomEvent).detail;

      eventHandler(data);
    };

    element?.addEventListener(eventName, handleEvent, false);

    return () => {
      element?.removeEventListener(eventName, handleEvent, false);
    };
  });
}

/**
 * Attaches data to a custom event.
 *
 * @description The react way of handling events is to pass callbacks to child components.
 * This can become cumbersome when a child is several levels deep and one way to avoid passing callbacks deep is using Context.
 * However, context or redux are not meant for all use cases.
 *
 * @example
 *
 * // Attach data to an event
 * emitCustomEvent('a-custom-event-name', data);
 *
 * // Listen to the event using the custom hook
 * useCustomEventListener('a-custom-event-name', data => {
 * 	doSomethingWithData( data );
 * });
 * @export
 * @template GenericType
 * @param {string} eventName
 * @param {GenericType} [data]
 */
export function emitCustomEvent<GenericType>(eventName: string, data?: GenericType): void {
  const element = getElement();
  const event: CustomEvent<GenericType> = new CustomEvent(eventName, { detail: data });

  element?.dispatchEvent(event);
}
