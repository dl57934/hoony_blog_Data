public class HtmlText extends Builder {
	StringBuilder strBuilder = new StringBuilder();
	public void setTitle(String title){
		strBuilder.append("<h1>"+title+"</h1>").append("\n");
	}
	public void setText(String text){
		strBuilder.append("<p>"+text+"</p>").append("\n");
	}
	public void setItem(String[] items){
		int i = 1;
		strBuilder.append("<ul>");
		for(String item: items){
			strBuilder.append("<li>"+i+" "+item+"</li>").append("\n");
			i+=1;
		}
		strBuilder.append("</ul>");
	}
	public void close(){
	}
	public String getResult(){
		return strBuilder.toString();
	}
}