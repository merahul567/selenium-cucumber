package step_definition;

//import org.junit.Assert;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.orangehrmlive.demo.BrowserFactory;
import com.orangehrmlive.demo.HomePage;
import com.orangehrmlive.demo.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	public static WebDriver driver;
	BrowserFactory obj1;
	static LoginPage loginPage;
	static HomePage homePage;

	@Given("^navigate to Orange HRM page$")
	public void navigate() {
		driver = BrowserFactory.getDriver("chrome");
		driver.get("https://opensource-demo.orangehrmlive.com/");
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}

	@When("^user logged in using username as \"(.*)\" and password as \"(.*)\"$")
	public void login(String username, String password) {
		loginPage.loginHRM(username, password);
	}

	@Then("^home page should be displayed$")
	public void verifySuccessful() {
		String expectedText = "Dashboard";
		String actualText = loginPage.verifyLogin();
//		Assert.assertTrue("Login not successful", expectedText.equals(actualText));
		Assert.assertTrue(expectedText.equals(actualText));
		
	}
	
	@Given("^User is in to My Info Page$")
	public void User_is_in_to_My_Info_Page(){
		homePage = PageFactory.initElements(driver, HomePage.class);
		homePage.clickMyInfo();
	}

	@When("^User clicked on Edit button$")
	public void User_clicked_on_Edit_button() {
		homePage.clickEditSave();
	    
	}

	@When("^User changes the first name to \"(.*)\"$")
	public void User_changes_the_first_name(String name){
	    homePage.changeFirstName(name);
	}

	@When("^User clicked on save button$")
	public void User_clicked_on_save_button()  {
		homePage.clickEditSave();
	}

	@Then("^updated first name \"(.*)\" should be diplayed$")
	public void updated_first_name_should_be_diplayed(String name)  {
		String expectedText = name;;
		String actualText = homePage.verifyNameChange();
		Assert.assertTrue(expectedText.equals(actualText));
		//Assert.assertTrue("Name change not successful", expectedText.equals(actualText));
	    
	}
}
