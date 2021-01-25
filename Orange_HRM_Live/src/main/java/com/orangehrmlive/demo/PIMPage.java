package com.orangehrmlive.demo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class PIMPage extends GenericFunctions{
	
	WebDriver driver;

	public PIMPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.ID, using = "menu_pim_viewPimModule")
	@CacheLookup
	WebElement pimPageButton;
	
	@FindBy(how = How.ID, using = "menu_pim_viewEmployeeList")
	@CacheLookup
	WebElement empListButton;
	@FindBy(how = How.ID, using = "menu_pim_addEmployee")
	@CacheLookup
	WebElement addEmployeeButton;
	@FindBy(how = How.ID, using = "btnSave")
	@CacheLookup
	WebElement saveEmpButton;
	@FindBy(how = How.ID, using = "firstName")
	@CacheLookup
	WebElement firstName;
	@FindBy(how = How.ID, using = "lastName")
	@CacheLookup
	WebElement lastName;
	@FindBy(how = How.ID, using = "employeeId")
	@CacheLookup
	WebElement employeeId;
	@FindBy(how = How.ID, using = "personal_txtEmpFirstName")
	@CacheLookup
	WebElement createdFirstName;
	@FindBy(how = How.ID, using = "personal_txtEmpLastName")
	@CacheLookup
	WebElement createdLastName;
	@FindBy(how = How.ID, using = "personal_txtEmployeeId")
	@CacheLookup
	WebElement createdEmployeeId;
	
	
	public void clickPIMButton() {
		wait(1);
		mouseHover(pimPageButton);
		
	}
	public void clickEmpListButton() {
		wait(1);
		empListButton.click();
		
	}
	public void clickAddEmployeeButton() {
		wait(1);
		addEmployeeButton.click();
		
	}
	public void clickSaveEmpButton() {
		wait(1);
		saveEmpButton.click();
		
	}
	public void enterFirstName(String first_name) {
		wait(1);
		firstName.sendKeys(first_name);
		
	}
	public void enterLastName(String last_name) {
		wait(1);
		lastName.sendKeys(last_name);
		
	}
	public String getEmpId() {
		return employeeId.getAttribute("value");
		
	}
	public String verifyFirstName() {
		return createdFirstName.getAttribute("value");
		
	}
	public String verifyLastName() {
		return createdLastName.getAttribute("value");
		
	}
	public String verifyEmpId() {
		return createdEmployeeId.getAttribute("value");
		
	}
	
	
}
