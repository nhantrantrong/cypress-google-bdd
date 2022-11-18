/// <reference types="Cypress" />

/**
 * This class is wrapped up some cypress methods to be invoked when interacting with webpage
 */
class WebPage {

    url = "/";

    // =========================================================================
    // Interaction Methods
    // =========================================================================
    
    /**
     * Navigate to webpage url
     * @returns 
     */
    open() {
        return cy.visit(this.url);
    }

    /**
     * Navigate back
     * @returns 
     */
    goBack() {
        return cy.go('back');
    }

    /**
     * Navigate forward
     * @returns 
     */
    goForward() {
        return cy.go('forward');
    }

    /**
     * Reload page
     * @param {boolean} usingCache default value is false
     * @returns 
     */
    reload(usingCache = false) {
        return cy.reload(!usingCache);
    }

}

export default WebPage;