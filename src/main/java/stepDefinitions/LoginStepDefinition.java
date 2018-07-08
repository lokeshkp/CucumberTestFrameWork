/*
package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already Login Page$")
	public void user_is_already_Login_Page() throws Throwable {
		System.err.println("Cucumber Scripts are Take Off........");
		System.setProperty("webdriver.chrome.driver", "/Users/lokes/workspace/browsers/chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().deleteAllCookies();	 
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    driver.get("https:freecrm.com");
	}

	@When("^Title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() throws Throwable {
		String title = driver.getTitle();
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	}

	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String uname, String pwd) throws Throwable {
		driver.findElement(By.name("username")).sendKeys(uname);
		driver.findElement(By.name("password")).sendKeys(pwd);
	}

	@Then("^User cliks login button$")
	public void user_cliks_login_button() throws Throwable {
		WebElement loginBtn= driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js =(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
	}

	@Then("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		String title = driver.getTitle();
		Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("^User moves to new contact page$")
	public void user_moves_to_new_contact_page() throws Throwable {
		driver.switchTo().frame("mainpanel");
		WebElement element = driver.findElement(By.xpath("//a[@title='Contacts']"));
        Actions action = new Actions(driver); 
        action.moveToElement(element).build().perform(); 
        driver.findElement(By.linkText("New Contact")).click();
	}
	
	@Then("^User fills \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_fills_and_and_and(String fname, String lname, String company, String mobile) throws Throwable {
		driver.findElement(By.id("first_name")).sendKeys(fname);
		driver.findElement(By.id("surname")).sendKeys(lname);
		driver.findElement(By.name("client_lookup")).sendKeys(company);
		driver.findElement(By.id("mobile")).sendKeys(mobile);
		driver.findElement(By.xpath("//input[@value='Save']")).click();
	}
	
	
	@Then("^Close Browser$")
	public void close_Browser() throws Throwable {
		driver.quit();
	}


}
*/