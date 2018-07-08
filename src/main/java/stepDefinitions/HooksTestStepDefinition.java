package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksTestStepDefinition {

	// @Before and @After annotations are called Hooks in cucumber
	
	@Before
	public void initlise() throws Throwable {
	    System.out.println("Launching Browser..");
	}
	
	@When("^User enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
		 System.out.println("Entering credentials..");
	}
	
	@Then("^User clicks login button$")
	public void user_clicks_login_button() throws Throwable {
		 System.out.println("Clicking login button..");
	}
	
	@Then("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		 System.out.println("User at HomePage..");
	}
	
	@Then("^create contact$")
	public void create_contact() throws Throwable {
		System.out.println("Contact is created..");
	}

	@Then("^create deal$")
	public void create_deal() throws Throwable {
		System.out.println("Deal is created..");
	}

	
	@After
	public void tearDown() throws Throwable {
		 System.out.println("Browser closing..");
	}
}
