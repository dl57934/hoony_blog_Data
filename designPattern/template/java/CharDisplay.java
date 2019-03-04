
public class CharDisplay extends AbstractPrint {
	char chararcter;
	int width;

	public CharDisplay(char chararcter) {
		this.chararcter = chararcter;
	}

	public void open() {
		System.out.print("<<");
	}

	public void print() {
		System.out.print(this.chararcter);
	}

	public void close() {
		System.out.println(">>");
	}

}