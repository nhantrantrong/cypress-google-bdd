import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from '../../TestController';

/**
 * This class is used to define the steps which can be shared with all of features
 */

Given('I open Google page', () => {
    homePage.open();
})