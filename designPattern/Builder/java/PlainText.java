public class PlainText extends Builder{
	StringBuilder strBuilder = new StringBuilder();
	public void setTitle(String title){
		strBuilder.append("------------------------").append("\n");	
		strBuilder.append(title).append("\n");
	}
	public void setText(String text){
		strBuilder.append(text).append("\n");
	}
	public void setItem(String[] items){
		int i = 1;
		for(String item: items){
			strBuilder.append(i+" "+item).append("\n");
			i+=1;
		}
	}
	public void close(){
		strBuilder.append("------------------------").append("\n");	
	}
	public String getResult(){
		return strBuilder.toString();
	}
}