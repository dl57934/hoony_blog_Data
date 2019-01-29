package pagemaker;

import java.io.*;
import java.util.Properties;

public class Database{
	private Database(){}

	static Properties getProperties(String dbname){
		String filename = dbname+".txt";
		Properties prop = new Properties();
		try{
			prop.load(new FileInputStream(filename));
		}catch(IOException e){
			System.out.println("warnning: "+ filename+ " is not found");
		}
		return prop;
	}
}