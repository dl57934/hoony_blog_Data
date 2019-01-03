public class Main{
	public static void main(String[] args){
		AbstractPrint charAbstractPrint = new CharDisplay('h');
		AbstractPrint stringAbstractPrint = new StringDisplay("Hello. world");
		AbstractPrint hello = new StringDisplay("안녕하세요.");
		hello.display();
		charAbstractPrint.display();
		stringAbstractPrint.display();
	}
}