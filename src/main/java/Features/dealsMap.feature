Feature: Deal Creation

  Scenario: Free CRM create a new deal scenario
    Given User is already Login Page
    When Title of login page is Free CRM
    Then User enters username and password
	    |username|password	|
	    |lokeshkp|sairam123	|
    
    Then User click login button
    Then User is on home page
    Then User moves to new deal page
    Then User enter deal details
	    |Title						|Amount|Quantity|
	    |Mr.Lokesh				|120000|20			|
	    |Mr.JanakiRamayya	|220000|10			|
	    |Mr.Dileep 				|320000|21			|
	    |Mr.Sai Karthik		|420000|34			|    
    Then Close Browser 								
    