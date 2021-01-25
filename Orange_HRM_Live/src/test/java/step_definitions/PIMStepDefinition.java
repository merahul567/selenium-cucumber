package step_definitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.orangehrmlive.demo.BrowserFactory;
import com.orangehrmlive.demo.PIMPage;
import com.orangehrmlive.demo.Propert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PIMStepDefinition {

	public static WebDriver driver =BrowserFactory.getDriver("chrome");
	public static PIMPage pimPage=PageFactory.initElements(driver,PIMPage.class);
	public static Propert prop = new Propert();
	
	@Given("^User in on PIM Page$")
	public void User_in_on_PIM_Page()  {
		pimPage.clickPIMButton();
	  
	}

	@When("^User navigate to Employee list$")
	public void User_navigate_to_Employee_list()  {
		pimPage.clickEmpListButton();
	    
	}

	@When("^User click on Add Employee button$")
	public void User_click_on_Add_Employee_button() {
		pimPage.clickAddEmployeeButton();
	   
	}

	@When("^User enter \"(.*)\" and \"(.*)\" of Employee$")
	public void User_enter_employee_details(String firstName, String lastName){
	    pimPage.enterFirstName(firstName);
	    pimPage.enterLastName(lastName);
	    prop.setProperty("empId", pimPage.getEmpId());
	}

	@When("^User click on save button$")
	public void User_click_on_save_button(){
		pimPage.clickSaveEmpButton();
	    
	}

	@Then("^Employee \"(.*)\" \"(.*)\" should be added$")
	public void Employee_should_be_added(String expectedFirstName, String expectedLastName) {
		Assert.assertTrue(expectedFirstName.equals(pimPage.verifyFirstName()), "Incorrect Employee Addition");
		Assert.assertTrue(expectedLastName.equals(pimPage.verifyLastName()), "Incorrect Employee Addition");
		Assert.assertTrue(prop.getProperty("empId").equals(pimPage.verifyEmpId()), "Incorrect Employee Addition");
	}

}
