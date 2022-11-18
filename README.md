# cypress-google-bdd
This is sample repository to validate the Google Search homepage using Behaviour Driven Approach

## Automation FW Architecture:
![image](https://user-images.githubusercontent.com/64664332/202754711-e95a999e-7640-4008-9631-1e7fb1aee11e.png)

- **support :** Location of `core` methods and common methods of a specified project (ex: google)
     + core : Definition of classes to store wrapped up `cy` build in method which relating much more on the framework and elements handling
     + specified project folder name (ex: google) : Definition of page object classes to store elements' locators and corresponding interaction methods
- **configuration :** Store configuration for cypress and test run. We can define specPattern, timeout, environment variables, etc. in **_cypress.config.js_** file
- **fixtures :** Resources location. Test Data files, JSON Schemas, upload images, downloads, etc. would be store in this folder
- **e2e :** Test feature files and step definition files location.
     + features : Feature file location
     + step-definitions :
        + common : locations of steps which can be shared and reused for all of features (ex: open or navigate to some page, beforeEach, afterEach method, etc.)
        + google-search : specified step definition class for google searching context
     + The `TestController.js` class would be used to initialize the class instances as well as storing `setUp` method defintion in case we need to run on mutiple test environments
- **report :** Location for the generated the json (allure-results) and html report (allure-report)

## Structure in VSCode Editor:
![image](https://user-images.githubusercontent.com/64664332/202754924-9e776976-819f-4e82-8827-46d6766825ac.png)


## Prerequisite:
- Install [NodeJS-v14.17.3](https://nodejs.org/dist/v14.17.3/)
<img width="433" alt="image" src="https://user-images.githubusercontent.com/64664332/202755015-1a2c9238-4e2f-474c-af3b-0e7db73a980c.png">

- Install [allure-commandline](https://www.npmjs.com/package/allure-commandline)
<img width="488" alt="image" src="https://user-images.githubusercontent.com/64664332/202755113-eeefd385-4370-4732-b368-f5a3cfad2ad4.png">

- Install dependencies after cloning repository to your local
`npm run reinstall`
<img width="1425" alt="image" src="https://user-images.githubusercontent.com/64664332/202759319-70d2f6c7-f01e-4824-966e-fc8792864215.png">

## Test Scenario:
```
  Background:
    Given I open Google page

  Scenario: Open the Google home page and search for the keyword "Behavior Driven"
      When I search keyword "Behavior Driven"
      Then Validate the returned result title should contain keyword "Behavior Driven"
```

## Execute Test:
- To run tests, please use following command `npm run cy:test`
<img width="726" alt="image" src="https://user-images.githubusercontent.com/64664332/202759683-d607241b-f8f3-4418-bccb-50cccff32f9b.png">


## Report:
- To generate and open allure-report on your local. Please use command `npm run allure:report`
<img width="736" alt="image" src="https://user-images.githubusercontent.com/64664332/202761218-83e7db62-b0ee-40da-afc4-8e3ec9d86842.png">

![image](https://user-images.githubusercontent.com/64664332/202761396-d54befe6-6a8d-4d71-8693-83edd3e56393.png)
