Feature: Deal Creation

  Scenario: Free CRM create a new deal scenario
    Given User is already Login Page
    When Title of login page is Free CRM
    Then User enters username and password
    |lokeshkp|sairam123|    
    Then User click login button
    Then User is on home page
    Then User moves to new deal page
    Then User enter deal details
    |Mr|120000|20|
    Then Close Browser 								
    