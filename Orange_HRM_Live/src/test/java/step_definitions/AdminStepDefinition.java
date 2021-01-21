package step_definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.orangehrmlive.demo.AdminPage;
import com.orangehrmlive.demo.BrowserFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AdminStepDefinition {

	public static WebDriver driver = BrowserFactory.getDriver("chrome");
	static AdminPage adminPage = PageFactory.initElements(driver, AdminPage.class);
	
	@Given("^User is on Admin Page$")
	public void User_is_on_Admin_Page() {
		adminPage.clickAdminButton();
	    
	}

	@When("^User navigate to User Management section$")
	public void User_navigate_to_User_Management_section() {
		adminPage.clickUserMngButton();
	    adminPage.clickUsersButton();
	}

	@When("^User click on Add User button$")
	public void User_click_on_Add_User_button() {
		adminPage.clickAddButton();
	    
	}

	@When("^User enter Employee details$")
	public void User_enter_Employee_details() {
	  
	}

	@When("^User click on Save button$")
	public void User_click_on_Save_button(){
		
	    
	}
	

}
