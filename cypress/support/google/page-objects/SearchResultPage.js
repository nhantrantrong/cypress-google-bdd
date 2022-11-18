/// <reference types="Cypress" />

import WebPage from '../../core/ui/WebPage';
import { webElement } from '../../../e2e/TestController';

/**
 * Page Object class of SearchResultPage
 */
class SearchResultPage extends WebPage {

    // css elements' locators
    resultTitleLink = `h3`;

    /**
     * Validate text of the Title link should contain the input keyword
     * @param {string} keyword 
     */
    validateResultTitleLinkShouldContainKeyword(keyword) {
        webElement.validateTextContains(this.resultTitleLink, keyword);
    }
}

export default SearchResultPage;