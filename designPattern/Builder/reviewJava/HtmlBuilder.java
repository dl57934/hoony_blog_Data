public class HtmlBuilder extends Builder{
	public void makeTitle(String title){
		appendStr("<h1>"+title+"</h1>");
	}
	public void makeItem(String[] items){
		appendStr("<ul>");
		for(String item: items)
			appendStr("<li>"+item+"</li>");
		appendStr("</ul>");
	}
	public void makeText(String text){
		appendStr("<p>" + text + "</p>");
	}
	public void close(){}
}