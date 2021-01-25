package com.orangehrmlive.demo;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestSeleniumBasics {

	public static void main(String[] args) throws InterruptedException {
		
		Propert pro = new Propert();
		pro.getProperty("empId");
		pro.setProperty("empId", "12345");
		pro.getProperty("empId");
		pro.getProperty("empName");
		pro.setProperty("empName", "Rahul");
		pro.getProperty("empName");
		System.setProperty("webdriver.chrome.driver",
				"src" + File.separator + "main" + File.separator + "resources" + File.separator + "driver"
						+ File.separator + "chrome_87.0.4280.88" + File.separator + "chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(45, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(45, TimeUnit.SECONDS);
		driver.get("");

		Thread.sleep(10000);
		driver.close();

	}

}
