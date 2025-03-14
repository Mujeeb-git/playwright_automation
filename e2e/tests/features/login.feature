Feature: Login to application

    Scenario: To test login
        Given user is on login page
        When user enters username as "dummy1234@gmail.com" and password as "dummy1234@gmail.com"
        Then Home page should be displayed
        And user logs out
