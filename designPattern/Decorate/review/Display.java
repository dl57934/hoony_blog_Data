public abstract class Display{
	public abstract int getRows();
	public abstract int getColumns();
	public abstract String getRowText(int line);
	public void show(){
		for(int i=0; i < getRows(); i++)
			System.out.println(getRowText(i));
	}
}