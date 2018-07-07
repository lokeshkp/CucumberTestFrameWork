Feature: Free CRM Create Contacts

	Scenario Outline: Free CRM Create new contact
		Given User is already Login Page
    When Title of login page is Free CRM
    Then User enters "<username>" and "<password>"
    Then User cliks login button
    Then User is on home page
    Then User moves to new contact page
    Then User fills "<firstname>" and "<lastname>" and "<compnay>" and "<mobile>"
    Then Close Browser 
 
 	Examples:
 	|username|password	|firstname|lastname	|company|mobile			|
 	|lokeshkp|sairam123	|pavani		|kondepudi|ust		|9329334311	|
 	|lokeshkp|sairam123	|eswari		|kondepudi|cts		|9293343121	|
 	