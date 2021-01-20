package step_definition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.orangehrmlive.demo.BrowserFactory;
import com.orangehrmlive.demo.MyInfoPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyInfoStepDefinition {

	public static WebDriver driver =BrowserFactory.getDriver("chrome");
	static MyInfoPage myInfoPage=PageFactory.initElements(driver,MyInfoPage.class);

	@Given("^User is in to My Info Page$")
	public void User_is_in_to_My_Info_Page(){
		myInfoPage.clickMyInfo();
	}

	@When("^User clicked on Edit button$")
	public void User_clicked_on_Edit_button() {
		myInfoPage.clickEditSave();

	}

	@When("^User changes the first name to \"(.*)\"$")
	public void User_changes_the_first_name(String name) {
		myInfoPage.changeFirstName(name);
	}

	@When("^User clicked on save button$")
	public void User_clicked_on_save_button() {
		myInfoPage.clickEditSave();
	}

	@Then("^updated first name \"(.*)\" should be diplayed$")
	public void updated_first_name_should_be_diplayed(String name) {
		String expectedText = name;
		;
		String actualText = myInfoPage.verifyNameChange();
		Assert.assertTrue(expectedText.equals(actualText), "Name change not successful");

	}

	@When("^User click on change photo$")
	public void User_clicked_on_change_photo() {
		myInfoPage.clickChangePhoto();
	}

	@And("^User select a png photo to upload$")
	public void User_clicked_on_Choose_File() {
		myInfoPage.selectPNGPhoto();
	}

	@And("^User click on upload button$")
	public void User_clicked_on_upload_button() {
		myInfoPage.clickUploadPhoto();
	}

	@Then("^Photo should be uploaded$")
	public void photo_should_be_uploaded() {
		String expectedText = "message success fadable";
		String actualText = myInfoPage.verifyPhotoUpload();
		Assert.assertTrue(expectedText.equals(actualText), "Photo was not uploaded");

	}
}
