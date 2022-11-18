/// <reference types="Cypress" />

/**
 * This class is wrapped up some cypress methods to be invoked when interacting with web elements
 */
class WebElement {

    // =========================================================================
    // Interaction Methods
    // =========================================================================

    /**
     * Wrapped up `cy.get()` method
     * @param {string} selector css locator
     * @returns 
     */
    get(selector) {
        return cy.get(selector);
    }

    /**
     * Wrapped up `cy.get().type()` method
     * @param {string} selector css locator
     * @param {string} value value to type into element
     * @returns 
     */
    type(selector, value) {
        return this.get(selector)
            .type(value);
    }

    /**
     * Wrapped up `cy.get().last().click({force: <optional true/false value>})` method
     * @param {string} selector css locator
     * @param {boolean} isForce true/false - default is 'false'
     * @returns 
     */
    clickOnLast(selector, isForce = false) {
        return this.get(selector)
            .last()
            .click({ force: isForce });
    }

    // =========================================================================
    // Validation Methods
    // =========================================================================

    /**
     * Wrapped up `cy.get().should('contain.text', <expectedValue>)` method
     * @param {string} selector css locator
     * @param {string} value expected value for validation
     * @returns 
     */
    validateTextContains(selector, value) {
        return this.get(selector)
            .should('contain.text', value);
    }
}

export default WebElement;