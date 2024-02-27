/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/*
 * Please refer to the terms of the license
 * agreement.
 *
 * (c) 2023 joaodias.me, Rights Reserved.
 */
import { KeyOrShortcut } from "cypress/support/commands";
import { FOCUSABLE_ELEMENT_SELECTOR } from "../../selectors/focusable";

const ROVER_STORY_URL = "/docs/manage-focus/roving-tabindex";

describe("Roving Tab Index", () => {
	beforeEach(() => {
		cy.visit(ROVER_STORY_URL);
		cy.findByRole("button", { name: "A Button" }).as("FirstButton");
		cy.findByRole("button", { name: "Another Button" }).as("SecondButton");
		cy.findByTestId("js-roving-tabindex-sidenav").as("Nav");
	});

	it("should not use tab as a means to travel through the menu", () => {
		cy.get("@FirstButton").focus();
		cy.get("@FirstButton").tabUntil(() => cy.get("@SecondButton"));
		cy.get("@SecondButton").should("have.focus");
	});

	it("should go through the menu using the down arrow button", () => {
		cy.get("@FirstButton").focus();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");
			cy.focused()
				.pressUntil(() => cy.get("@navButtons").last(), "ArrowDown")
				.realPress("Tab");
		});
		cy.get("@SecondButton").should("have.focus");
	});

	it("should travel to the top of the menu when pressing the Home button", () => {
		cy.get("@FirstButton").focus();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");
			cy.focused()
				.pressUntil(() => cy.get("@navButtons").last(), "ArrowDown")
				.realPress("Home");
			cy.get("@navButtons").first().should("have.focus");
		});
	});

	it("should travel to the bottom of the menu when pressing the End button", () => {
		cy.get("@FirstButton").focus();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");
			cy.get("@navButtons").first().realPress("End");
			cy.get("@navButtons").last().should("have.focus");
		});
	});

	it("should not do anything if pressed a non-mapped key", () => {
		const KEYS: KeyOrShortcut[] = [
			"Delete",
			"Insert",
			"PageUp",
			"PageDown",
			"ArrowRight",
			"ArrowLeft",
			"!",
			"#",
			"$",
			"%",
			"&",
			"(",
			")",
			"<",
			">",
			"{{}",
			"Escape",
			"ZoomOut",
		];

		cy.get("@FirstButton").focus();
		cy.get("@FirstButton").realPress("Tab");
		cy.get("@Nav").within(() => {
			cy.get(FOCUSABLE_ELEMENT_SELECTOR).as("navButtons");
			cy.get("@navButtons").first().should("have.focus");

			for (const key of KEYS) {
				cy.get("@navButtons").first().realPress(key);
				cy.get("@navButtons").first().should("have.focus");
			}
		});
	});
});
