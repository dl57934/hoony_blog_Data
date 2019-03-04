public abstract class AbstractPrint {
	public abstract void open();

	public abstract void print();

	public abstract void close();

	public void write() {
		open();
		for (int i = 0; i < 5; i++)
			print();
		close();
	}
}