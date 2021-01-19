package com.orangehrmlive.demo;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

public class ExcelUtils {
	public void readExcel(String filePath, String fileName, String sheetName) throws IOException {

		// Create an object of File class to open xlsx file
		// C:\Users\kumar\eclipse-workspace\Orange_HRM_Live\src\test\resources

		File file = new File(filePath + "\\" + fileName);

		FileInputStream inputStream = new FileInputStream(file);

		Workbook workbook = null;

		// Find the file extension by splitting file name in substring and getting only
		// extension name

		String fileExtensionName = fileName.substring(fileName.indexOf("."));

		// Check condition if the file is xlsx file

		if (fileExtensionName.equals(".xlsx")) {

			// If it is xlsx file then create object of XSSFWorkbook class

			workbook = new XSSFWorkbook(inputStream);

		}

		// Check condition if the file is xls file

		else if (fileExtensionName.equals(".xls")) {

			// If it is xls file then create object of HSSFWorkbook class

			workbook = new HSSFWorkbook(inputStream);

		}

		Sheet sheet = workbook.getSheet(sheetName);

		// Find number of rows in excel file

		int rowCount = sheet.getLastRowNum() - sheet.getFirstRowNum();

		for (int i = 0; i < rowCount + 1; i++) {

			Row row = sheet.getRow(i);

			for (int j = 0; j < row.getLastCellNum(); j++) {

				System.out.print(row.getCell(j).getStringCellValue() + "|| ");

			}

			System.out.println();
		}

	}

	public void writeExcel(String filePath, String fileName, String sheetName, String[] dataToWrite)
			throws IOException {

		File file = new File(filePath + "\\" + fileName);

		FileInputStream inputStream = new FileInputStream(file);

		Workbook workbook = null;

		// Find the file extension by splitting file name in substring and getting only
		// extension name

		String fileExtensionName = fileName.substring(fileName.indexOf("."));

		// Check condition if the file is xlsx file

		if (fileExtensionName.equals(".xlsx")) {

			// If it is xlsx file then create object of XSSFWorkbook class

			workbook = new XSSFWorkbook(inputStream);

		}

		// Check condition if the file is xls file

		else if (fileExtensionName.equals(".xls")) {

			// If it is xls file then create object of XSSFWorkbook class

			workbook = new HSSFWorkbook(inputStream);

		}

		Sheet sheet = workbook.getSheet(sheetName);

		// Get the current count of rows in excel file

		int rowCount = sheet.getLastRowNum() - sheet.getFirstRowNum();

		Row row = sheet.getRow(0);

		Row newRow = sheet.createRow(rowCount + 1);

		for (int j = 0; j < row.getLastCellNum(); j++) {

			Cell cell = newRow.createCell(j);

			cell.setCellValue(dataToWrite[j]);

		}

		inputStream.close();

		FileOutputStream outputStream = new FileOutputStream(file);

		workbook.write(outputStream);

		outputStream.close();

	}

}
