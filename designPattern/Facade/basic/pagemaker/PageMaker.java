package pagemaker;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Properties;

public class PageMaker{
	private PageMaker(){}

	public static void makeWelcomepage(String mailaddr, String filename){
		try{
			Properties mailprop = Database.getProperties("maildata");
			String username = mailprop.getProperty(mailaddr);
			HtmlWriter writer = new HtmlWriter(new FileWriter(filename));
			writer.title("welcome to "+username+" 's page!");
			writer.paragraph(username+"의 페이지에 오신걸 환영합니다.");
			writer.paragraph("메일을 기다리고 있습니다.");
			writer.mailto(mailaddr, username);
			writer.close();
			System.out.println(filename+ " is create for "+ mailaddr + " ("+ username + ")");
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}