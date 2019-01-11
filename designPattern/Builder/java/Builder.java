public abstract class Builder{
	public abstract void setTitle(String title);
	public abstract void setText(String text);
	public abstract void setItem(String[] items);
	public abstract void close();
	public abstract String getResult();
}