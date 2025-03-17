Feature: Login to application 2

    Scenario: To test login 2
        Given user is on login page
        When user enters username and password
        Then Home page should not be displayed
        And user logs out
