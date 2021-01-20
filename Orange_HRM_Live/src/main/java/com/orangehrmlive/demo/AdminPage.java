package com.orangehrmlive.demo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AdminPage extends GenericFunctions{
	
	WebDriver driver;

	public AdminPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.ID, using = "menu_admin_viewAdminModule")
	@CacheLookup
	WebElement adminPageButton;
	
	@FindBy(how = How.ID, using = "menu_admin_UserManagement")
	@CacheLookup
	WebElement UserMngButton;
	@FindBy(how = How.ID, using = "menu_admin_viewSystemUsers")
	@CacheLookup
	WebElement systemUserButton;
	@FindBy(how = How.NAME, using = "btnAdd")
	@CacheLookup
	WebElement addUserButton;
	
	public void clickAdminButton() {
		wait(1);
		adminPageButton.click();
		
	}
	public void clickUserMngButton() {
		wait(1);
		UserMngButton.click();
		
	}
	public void clickUsersButton() {
		wait(1);
		systemUserButton.click();
		
	}
	public void clickAddButton() {
		wait(1);
		addUserButton.click();
		
	}
	
	
}
