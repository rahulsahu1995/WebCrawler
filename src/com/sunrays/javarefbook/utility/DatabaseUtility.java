package com.sunrays.javarefbook.utility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.ResourceBundle;

/**
 * Database Utility class is user to get database connection
 * 
 * @author Sunil Sahu
 * 
 */

public class DatabaseUtility {

	static ResourceBundle bundle = ResourceBundle
			.getBundle("com.sunrays.javarefbook.bundle.ResourceBundle");

	static {
		// Load Driver
		try {
			Class.forName(bundle.getString("driverClass"));
		} catch (ClassNotFoundException e) {
			System.out.println("Driver Loading Error...");
			e.printStackTrace();
		}
	}

	public static Connection openConnection() throws Exception {
		// Create Connection
		Connection conn = DriverManager.getConnection(bundle.getString("url"),
				bundle.getString("username"), bundle.getString("password"));
		return conn;
	}

	public static void closeConnection(Connection conn) throws Exception {
		// Close Connection
		try {
			conn.close();
		} catch (Exception e) {
		}
	}

}
