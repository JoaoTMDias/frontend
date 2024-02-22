/// <reference types="cypress" />
import { getContainerEl } from "cypress/react";
import ReactDom from "react-dom";
import "@testing-library/cypress/add-commands";


Cypress.Commands.add('unmount', () => cy.then(() => ReactDom.unmountComponentAtNode(getContainerEl())));
