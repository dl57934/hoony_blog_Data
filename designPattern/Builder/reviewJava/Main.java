import java.io.*;

public class Main{
	public static void main(String[] args) throws Exception{
		BufferedReader bfr = new BufferedReader(new InputStreamReader(System.in));
		String order = bfr.readLine();

		if(isHtml(order))
			doucumentsPrint(new HtmlBuilder());
		else
			doucumentsPrint(new TextBuilder());
		
	}

	public static boolean isHtml(String type){
		return type.equals("html");
	}

	public static void doucumentsPrint(Builder builder){
		Director director = new Director(builder);
		director.constructor();
		System.out.println(director.getDocuments());
	}
}