package com.orangehrmlive.demo;

import java.util.concurrent.TimeUnit;

import javax.swing.JOptionPane;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GenericFunctions extends BrowserFactory {

	public static void wait(int time) {
		try {
			Thread.sleep(time * 1000);
			System.out.println("waiting " + time + " secs...");
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public static void implicitlyWait(int time) {
		try {
			driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
			System.out.println("waiting implicitly " + time + " secs...");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void explicitlyWait(int time, WebElement firstName) {
		try {
			WebDriverWait wait = new WebDriverWait(driver, 30);
			wait.until(ExpectedConditions.visibilityOf(firstName));
			System.out.println("waiting explicitly " + time + " secs...");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void highlight(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;

		js.executeScript("arguments[0].setAttribute('style','background: yellow; border: solid 2px red');", element);
	}

	public static void enterCaptcha(WebElement captchaField) {
		// prompting user to enter captcha
		String captchaVal = JOptionPane.showInputDialog("Please enter the captcha value:");
		System.out.println(captchaVal);
		// Type the entered captcha to the text box
		captchaField.sendKeys(captchaVal);
	}

}
