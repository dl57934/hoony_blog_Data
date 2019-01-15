public abstract class Builder{
	StringBuilder strBuilder = new StringBuilder();
	public abstract void makeTitle(String title);
	public abstract void makeItem(String[] items);
	public abstract void makeText(String text);
	public abstract void close();
	public void appendStr(String text){
		strBuilder.append(text).append("\n\n");
	}
	public String result(){
		return strBuilder.toString();
	}
}