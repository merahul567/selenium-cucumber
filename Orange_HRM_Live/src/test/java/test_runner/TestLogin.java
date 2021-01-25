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
features="src/test/resources/features",
glue="step_definitions",
tags = {"@loginPage,~@changeDetails,~@userManagement,@addEmployee"}, 
monochrome = true,
dryRun = false,
strict = true
)
public class TestLogin extends AbstractTestNGCucumberTests{
@AfterClass
public static void tearDown() throws Exception {
	BrowserFactory.driver.quit();
}
}


