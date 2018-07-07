package stepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealStepDefinition {
	
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
	
	@Then("^User enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}
	
	@Then("^User click login button$")
	public void user_click_login_button() throws Throwable {
		WebElement loginBtn= driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js =(JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
	}
	
	@Then("^User is on home page$")
	public void user_is_on_home_page() throws Throwable {
		String title = driver.getTitle();
		Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("^User moves to new deal page$")
	public void user_moves_to_new_deal_page() throws Throwable {
		driver.switchTo().frame("mainpanel");
		WebElement element = driver.findElement(By.xpath("//a[@title='Deals']"));
        Actions action = new Actions(driver); 
        action.moveToElement(element).build().perform(); 
        driver.findElement(By.linkText("New Deal")).click();
	}
	
	@Then("^User enter deal details$")
	public void user_enter_deal_details(DataTable dealdetails) throws Throwable {
		List<List<String>> data = dealdetails.raw();
		driver.findElement(By.id("title")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("amount")).sendKeys(data.get(0).get(1));
		driver.findElement(By.name("quantity")).sendKeys(data.get(0).get(2));
		driver.findElement(By.xpath("//input[@value='Save']")).click();
	}
	
	@Then("^Close Browser$")
	public void close_Browser() throws Throwable {
		driver.quit();
	}


}
