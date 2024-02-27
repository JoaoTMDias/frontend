/* eslint-disable @typescript-eslint/no-namespace */
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import "@testing-library/cypress/add-commands";
import "cypress-real-events/support";
import "cypress-axe";
import { keyCodeDefinitions } from "cypress-real-events/keyCodeDefinitions";
import { isAriaDisabled } from "./a11y/assertions/isAriaDisabled";
import { recurse } from "cypress-recurse";
import { mount } from "cypress/react";

chai.use(isAriaDisabled);

type Key = keyof typeof keyCodeDefinitions;
export type KeyOrShortcut = Key | Array<Key>;
interface RealPressOptions {
	/**
	 * Delay between keyDown and keyUp events (ms)
	 * @default 10
	 */
	pressDelay?: number;
	/**
	 * Displays the command in the Cypress command log
	 * @default true
	 */
	log?: boolean;
}

declare global {
	namespace Cypress {
		interface Chainable {
			tab(options?: Partial<{ shift: boolean }>): Chainable;
			tabUntil<GenericCallback extends Cypress.Chainable<JQuery<HTMLElement>>>(
				element: () => GenericCallback,
				shift?: boolean
			): Cypress.Chainable<JQuery<HTMLElement>>;
			pressUntil<GenericCallback extends Cypress.Chainable<JQuery<HTMLElement>>>(
				element: () => GenericCallback,
				key: KeyOrShortcut,
				options?: RealPressOptions
			): Cypress.Chainable<JQuery<HTMLElement>>;

			mount: typeof mount;
		}
	}
}

/**
 * Presses the tab key until a predicate element is true.
 * It accepts a callback for finding the target element, and an optional shift element to tab backwards.
 * This commmand is specially useful to avoid chaining `.realPress("Tab")` multiple times before reaching an element.
 *
 * @requires `cypress-real-events` needs to be installed
 *
 * @example
 *
 * // Press tab until cypress finds the tab with the name "Transaction History"
 * cy.tabUntil(() => cy.getTab("Transaction History"));
 *
 * // Press tab until cypress finds the tab with the name "Transaction History",
 * // BUT travel backwards, using the `Shift+Tab` key combo
 * cy.tabUntil(() => cy.getTab("Transaction History", true));
 */
Cypress.Commands.add(
	"tabUntil",
	/**
	 * @param getElement
	 * @param shift
	 * @returns
	 */
	<GenericCallback extends Cypress.Chainable<JQuery<HTMLElement>>>(
		getElement: () => GenericCallback,
		shift = false
	) => {
		return recurse(
			() => getElement(),
			/**
			 * Element assertion.
			 *
			 * @param {JQuery<HTMLElement>} $el
			 * @returns {boolean}
			 */
			($el: JQuery<HTMLElement>): boolean => $el.is(":focus"),
			{
				log: "Found the element!",
				post() {
					cy.focused().realPress(shift ? ["Shift", "Tab"] : "Tab");
				},
			}
		).should("have.focus");
	}
);

/**
 * Presses a certain key until a predicate element is true.
 * It accepts a callback for finding the target element, the key and an optional shift element to tab backwards.
 * This commmand is specially useful to avoid chaining `.realPress("Tab")` multiple times before reaching an element.
 *
 * @requires `cypress-real-events` needs to be installed
 *
 * @example
 *
 * // Press tab until cypress finds the tab with the name "Transaction History"
 * cy.pressUntil(() => cy.getTab("Transaction History"), "ArrowDown");
 */
Cypress.Commands.add(
	"pressUntil",
	/**
	 * @param getElement
	 * @param shift
	 * @returns
	 */
	<GenericCallback extends Cypress.Chainable<JQuery<HTMLElement>>>(
		getElement: () => GenericCallback,
		key: KeyOrShortcut,
		options?: RealPressOptions
	) => {
		return recurse(
			() => getElement(),
			/**
			 * Element assertion.
			 *
			 * @param {JQuery<HTMLElement>} $el
			 * @returns {boolean}
			 */
			($el: JQuery<HTMLElement>): boolean => $el.is(":focus"),
			{
				log: "Found the element!",
				timeout: 20000,
				post() {
					cy.focused().realPress(key, options);
				},
			}
		).should("have.focus");
	}
);

Cypress.Commands.add("mount", mount);
