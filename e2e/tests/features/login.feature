Feature: Login to application

    Scenario: To test login
        Given user is on login page
        When user enters username and password
        Then Home page should be displayed
        And user logs out
