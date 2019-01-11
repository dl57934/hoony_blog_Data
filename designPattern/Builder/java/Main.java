import java.io.*;

public class Main{
	public static void main(String[] args) throws Exception{
		BufferedReader bfrReader = new BufferedReader(new InputStreamReader(System.in));
		String str = bfrReader.readLine();
		if(isHtml(str)){
			HtmlText htmlText = new HtmlText();
			String document = getDocument(htmlText);
			System.out.println(document);
		}else{
			PlainText plainText = new PlainText();
			String document = getDocument(plainText);
			System.out.println(document);
		}
	}

	public static String getDocument(Builder builder){
		Director director = new Director(builder);
		director.constructor();
		return builder.getResult();
	}

	public static boolean isHtml(String str){
		return str.equals("Html");
	}
}