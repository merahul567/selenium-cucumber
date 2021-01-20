package step_definition;

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
	
	

}
