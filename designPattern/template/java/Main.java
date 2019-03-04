public class Main {
	public static void main(String[] args) {
		AbstractPrint hello = new StringDisplay("Hi Hoony's Blog");
		AbstractPrint patternName = new StringDisplay("Hi Template Pattern");
		AbstractPrint c = new CharDisplay('c');
		hello.write();
		c.write();
		patternName.write();
	}
}