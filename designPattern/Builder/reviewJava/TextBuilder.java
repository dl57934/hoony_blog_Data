public class TextBuilder extends Builder{

	public void makeTitle(String title){
		appendStr("---------------------------");
		appendStr(title);
	}
	public void makeItem(String[] items){
		for(String item: items)
			appendStr(item);
	}
	public void makeText(String text){
		appendStr(text);
	}
	public void close(){
		appendStr("---------------------------");
	}
}