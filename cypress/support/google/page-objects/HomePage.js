/// <reference types="Cypress" />

import WebPage from '../../core/ui/WebPage';
import { webElement } from '../../../e2e/TestController';

/**
 * Page Object class of HomePage
 */
class HomePage extends WebPage {

    // css elements' locators
    searchInput = `form[action='/search'] input[type='text']`;
    searchButton = `form[action='/search'] input[name='btnK']`;

    /**
     * Type keyword into 'Search' textbox
     * @param {string} keyword 
     */
    typeSearch(keyword) {
        webElement.type(this.searchInput, keyword);
    }

    /**
     * Click on 'Search' button
     */
    clickSearchButton() {
        webElement.clickOnLast(this.searchButton, true);
    }
}

export default HomePage;