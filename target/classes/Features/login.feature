Feature: Free CRM Login Feature

# Data Drivern without examples
  #Scenario: Free CRM Login Scenario
   # Given User is already Login Page
    #When Title of login page is Free CRM
    #Then User enters "lokeshkp" and "sairam123"
    #And User cliks login button
    #Then User is on home page
    
# Data Drivern with examples keyword
   Scenario Outline: Free CRM Login Scenario
    Given User is already Login Page
    When Title of login page is Free CRM
    Then User enters "<username>" and "<password>"
    And User cliks login button
    Then User is on home page
    Then Close Browser

Examples:
	|username	|password	|
	|lokeshkp	|sairam123|
	|naveenk	|test@123	|	

    