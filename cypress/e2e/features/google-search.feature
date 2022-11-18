Feature: Google Search feature

    Search for a specific keyword on the Google home page

    Background:
        Given I open Google page

    Scenario: Open the Google home page and search for the keyword "Behavior Driven"
        When I search keyword "Behavior Driven"
        Then Validate the returned result title should contain keyword "Behavior Driven"