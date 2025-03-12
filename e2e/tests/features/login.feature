Feature: Login to application

    Scenario: To test login
        Given user is on login page
        When user enters username as "Admin" and password as "admin123"
        Then Home page should be displayed
