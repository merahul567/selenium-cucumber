package test_runner;

import org.testng.annotations.AfterClass;

//import org.junit.runner.RunWith;
import com.orangehrmlive.demo.BrowserFactory;
//import cucumber.api.*;
//import cucumber.api.junit.Cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:reports/test-report" },
features="src/test/resources/feature",
glue="step_definition",tags = {"@loginPage,@changeDetails,@userManagementPage"}, monochrome = true)
public class TestLogin extends AbstractTestNGCucumberTests{
@AfterClass
public static void tearDown() throws Exception {
	BrowserFactory.driver.quit();
}
}


