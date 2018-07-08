Feature: Free CRM Hooks Test Feature

# @Before annotation method will srart   (its same for all scenarios)
	Scenario: Free CRM Hooks Scenario
    Given User enters username and password
    When User clicks login button
    Then User is on home page
    Then create contact
# @After annotation method will execute  (its same for all scenarios)
    
    Scenario: Free CRM Hooks Scenario
    Given User enters username and password
    When User clicks login button
    Then User is on home page
    Then create deal
