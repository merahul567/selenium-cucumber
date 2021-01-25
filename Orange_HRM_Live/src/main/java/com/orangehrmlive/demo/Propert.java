package com.orangehrmlive.demo;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Properties;

public class Propert {

	File configFile = new File("config.properties");
	Properties props = new Properties();

	public String getProperty(String var) {
		String prop = "";
		try {
			FileReader reader = new FileReader(configFile);
			props.load(reader);

			prop = props.getProperty(var);

			System.out.println(prop);

			reader.close();

		} catch (FileNotFoundException ex) {
			System.out.println("file does not exist");
		} catch (IOException ex) {
			// I/O error
		}
		return prop;

	}

	public void setProperty(String target, String var) {
		try {

			FileWriter writer = new FileWriter(configFile);
			props.setProperty(target, var);
			props.store(writer, var);
			writer.close();
		} catch (FileNotFoundException ex) {
			System.out.println("file does not exist");
		} catch (IOException ex) {
			// I/O error
		}

	}
}