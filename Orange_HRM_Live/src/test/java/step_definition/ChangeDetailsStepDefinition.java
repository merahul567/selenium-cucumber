package step_definition;

//import org.junit.Assert;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.orangehrmlive.demo.BrowserFactory;
import com.orangehrmlive.demo.MyInfoPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ChangeDetailsStepDefinition {

	public static WebDriver driver;
	static MyInfoPage myInfoPage;
	
	@Given("^User is in to My Info Page$")
	public void User_is_in_to_My_Info_Page(){
		driver = BrowserFactory.getDriver("chrome");
		myInfoPage = PageFactory.initElements(driver, MyInfoPage.class);
		myInfoPage.clickMyInfo();
	}

	@When("^User clicked on Edit button$")
	public void User_clicked_on_Edit_button() {
		myInfoPage.clickEditSave();
	    
	}

	@When("^User changes the first name to \"(.*)\"$")
	public void User_changes_the_first_name(String name){
	    myInfoPage.changeFirstName(name);
	}

	@When("^User clicked on save button$")
	public void User_clicked_on_save_button()  {
		myInfoPage.clickEditSave();
	}

	@Then("^updated first name \"(.*)\" should be diplayed$")
	public void updated_first_name_should_be_diplayed(String name)  {
		String expectedText = name;;
		String actualText = myInfoPage.verifyNameChange();
		Assert.assertTrue(expectedText.equals(actualText));
		//Assert.assertTrue("Name change not successful", expectedText.equals(actualText));
	    
	}
	
	@When("^When User click on change photo$")
	public void User_clicked_on_change_photo() {
		
	}
	
	@And("^And User click on Choose File$")
	public void User_clicked_on_Choose_File() {
		
	}
	
	@And("^And User select a photo from local drive$")
	public void User_select_photo() {
		
	}
	
	@And("^And User click on Open button$")
	public void User_clicked_on_Open_button() {
		
	}
	
	@And("^And User click on upload button$")
	public void User_clicked_on_upload_button() {
		
	}
	
	@Then("^Then Photo should be uploaded$")
	public void photo_should_be_uploaded() {
		
	}
}
