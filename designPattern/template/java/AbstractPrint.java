public abstract class AbstractPrint{
	public abstract void open();
	public abstract void close();
	public abstract void print();
	public void display(){
		open();
		for(int i = 0; i < 5; i++)
			print();
		close();
	}
}