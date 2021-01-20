package step_definition;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.orangehrmlive.demo.BrowserFactory;
import com.orangehrmlive.demo.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {

	public static WebDriver driver =BrowserFactory.getDriver("chrome");
	static LoginPage loginPage=PageFactory.initElements(driver,LoginPage.class);

	@Given("^navigate to Orange HRM page$")
	public void navigate() {
		driver.get("https://opensource-demo.orangehrmlive.com/");
		
	}

	@When("^user logged in using username as \"(.*)\" and password as \"(.*)\"$")
	public void login(String username, String password) {
		loginPage.loginHRM(username, password);
	}

	@Then("^home page should be displayed$")
	public void verifySuccessful() {
		String expectedText = "Dashboard";
		String actualText = loginPage.verifyLogin();
		Assert.assertTrue(expectedText.equals(actualText), "Login not successful");
		
	}
	



}
