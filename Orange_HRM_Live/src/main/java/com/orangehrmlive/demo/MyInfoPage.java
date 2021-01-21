package com.orangehrmlive.demo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MyInfoPage extends GenericFunctions {

	WebDriver driver;

	public MyInfoPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.ID, using = "btnSave")
	@CacheLookup
	WebElement editSaveButton;
	@FindBy(how = How.XPATH, using = "//*[@id='personal_txtEmpFirstName' and @disabled='disabled']")
	@CacheLookup
	WebElement disabledFirstName;
	@FindBy(how = How.ID, using = "personal_txtEmpFirstName")
	@CacheLookup
	WebElement firstName;
	@FindBy(how = How.ID, using = "menu_pim_viewMyDetails")
	@CacheLookup
	WebElement myInfo;
	
	@FindBy(how = How.ID, using = "empPic")
	@CacheLookup
	WebElement employeePhotoButton;
	@FindBy(how = How.NAME, using = "photofile")
	@CacheLookup
	WebElement choosePhotoButton;
	@FindBy(how = How.ID, using = "btnSave")
	@CacheLookup
	WebElement uploadButton;
	@FindBy(how = How.XPATH, using = "//*/div[@class='message success fadable']")
	@CacheLookup
	WebElement uploadSuccessMsg;
	

	public void clickMyInfo() {
		wait(1);
		myInfo.click();
		
	}
	
	public void clickEditSave() {
		editSaveButton.click();
		wait(1);
		
	}
	
	public void changeFirstName(String name) {
		firstName.clear();
		firstName.sendKeys(name);
		wait(1);
		
	}
	public String verifyNameChange() {
		wait(1);
		explicitlyWait(10,disabledFirstName);
		return disabledFirstName.getAttribute("value");
	}
	
	public void clickChangePhoto() {
		employeePhotoButton.click();
		wait(1);
		
	}
	public void selectPNGPhoto() {
		choosePhotoButton.sendKeys("C:\\Users\\rkuma270\\OneDrive - Capgemini\\Pictures\\Screenshots\\Screenshot (1).png");
		wait(1);
		
	}
	public void clickUploadPhoto() {
		uploadButton.click();
		wait(1);
		
	}
	public String verifyPhotoUpload() {
		return uploadSuccessMsg.getAttribute("class");
		
	}

}
