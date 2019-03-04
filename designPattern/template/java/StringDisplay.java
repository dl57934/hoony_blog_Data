
public class StringDisplay extends AbstractPrint {
	String name;
	int width;

	public StringDisplay(String name) {
		this.name = name;
		this.width = name.length();
	}

	public void open() {
		this.printLine();
	}

	public void print() {
		System.out.println("|" + this.name + "|");
	}

	public void close() {
		this.printLine();
	}

	public void printLine() {
		StringBuilder line = new StringBuilder();
		line.append("*");
		for (int i = 0; i < this.width; i++)
			line.append("-");

		line.append("*");
		System.out.println(line);
	}
}