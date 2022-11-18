import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { homePage, searchResultPage } from '../../TestController';

/**
 * This class is used to define the steps of google-search context
 */

When('I search keyword {string}', (keyword) => {
    homePage.typeSearch(keyword);
    homePage.clickSearchButton();
})

Then('Validate the returned result title should contain keyword {string}', (keyword) => {
    searchResultPage.validateResultTitleLinkShouldContainKeyword(keyword);
})