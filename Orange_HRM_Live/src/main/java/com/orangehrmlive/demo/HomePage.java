package com.orangehrmlive.demo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import com.orangehrmlive.demo.GenericFunctions;

public class HomePage extends GenericFunctions {

	WebDriver driver;

	public HomePage(WebDriver driver) {
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
		explicitlyWait(60,disabledFirstName);
		return disabledFirstName.getAttribute("value");
	}

}
