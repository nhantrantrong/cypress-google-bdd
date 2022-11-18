import WebElement from '../support/core/ui/WebElement';
import HomePage from '../support/google/page-objects/HomePage';
import SearchResultPage from '../support/google/page-objects/SearchResultPage';

/**
 * This class is used to define class instances and some setUp common method before running tests
 */

// Pages class instances
export const homePage = new HomePage();
export const searchResultPage = new SearchResultPage();

// Core Method class instances
export const webElement = new WebElement();