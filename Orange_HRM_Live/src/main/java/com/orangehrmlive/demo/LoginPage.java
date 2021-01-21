package com.orangehrmlive.demo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends GenericFunctions {

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.NAME, using = "txtUsername")
	@CacheLookup
	WebElement username;
	@FindBy(how = How.NAME, using = "txtPassword")
	@CacheLookup
	WebElement password;
	@FindBy(how = How.ID, using = "btnLogin")
	@CacheLookup
	WebElement login;
	
	@FindBy(how = How.XPATH, using = "//*[@id='menu_dashboard_index']/b")
	@CacheLookup
	WebElement dashboard;

	public void loginHRM(String use, String pass) {
			username.sendKeys(use);
			wait(1);
			highlight(username);
			password.sendKeys(pass);
			wait(1);
			login.click();
		
	}
	
	public String verifyLogin() {
		return dashboard.getText();

	}

}
