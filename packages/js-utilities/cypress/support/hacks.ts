/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 joaodias.me
 */

Cypress.on("uncaught:exception", (err) => !err.message.includes("ResizeObserver"));
