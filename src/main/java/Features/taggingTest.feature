
Feature: Free CRM test feature
  @SmokeTest @Regression
  Scenario Outline: Free CRM Login Scenario One
    Given User is already Login Page
    When Title of login page is Free CRM
    Then User enters "<username>" and "<password>"
    Then User clicks login button
    Then User is on home page
    Then Close Browser
	
	Examples:
		|username	|password	|
		|lokeshkp	|sairam123|
		|naveenk	|test@123	|	
		
  @SmokeTest
  Scenario Outline: Free CRM Create new Contact scenario Two
		Given User is already Login Page
    When Title of login page is Free CRM
    Then User enters "<username>" and "<password>"
    Then User clicks login button1
    Then User is on home page
    Then User moves to new contact page
    Then User fills "<firstname>" and "<lastname>" and "<compnay>" and "<mobile>"
    Then Close Browser 
 
 	Examples:
 	|username|password	|firstname|lastname	|company|mobile			|
 	|lokeshkp|sairam123	|pavani		|kondepudi|ust		|9329334311	|
 	|lokeshkp|sairam123	|eswari		|kondepudi|cts		|9293343121	|
 	
 	@SanityTest @Regression
 	Scenario: Create a new Deal scenario Three
    Given User is already Login Page
    When Title of login page is Free CRM
    Then User enters username and password details
	    |username|password	|
	    |lokeshkp|sairam123	|
    
    Then User clicks login button
    Then User is on home page
    Then User moves to new deal page
    Then User enter deal details
	    |Title						|Amount|Quantity|
	    |Mrs.Eswari				|920000|20			|
	    |Mrs.Pavani				|220000|10			|
	    |Mrs.Sunitha 			|520000|21			|
	    |K.Answitha				|320000|34			|    
    Then Close Browser 							

  @SmokeTest
 	Scenario: Creating a new Company in Free CRM
    Given Create a new company
    
  @Regression
 	Scenario: Creating a new Task in Free CRM
    Given Create New Task
    
  @SmokeTest @Regression
 	Scenario: Creating a new Cases in Free CRM
    Given Create New Cases
    
  @SmokeTest @Regression
 	Scenario: Creating a new Call in Free CRM
    Given Create New Call
 
  @SmokeTest
 	Scenario: Creating a new Document in Free CRM
    Given Create New Document
    
  @SanityTest
 	Scenario: Creating a new Forms in Free CRM
    Given Create New Forms
    
  @Regression
 	Scenario: Creating new Reports in Free CRM
    Given Generating CRM Reports