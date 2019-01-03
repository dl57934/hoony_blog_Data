public class CharDisplay extends AbstractPrint{
	char inputChar;

	public CharDisplay(char inputChar){
		this.inputChar = inputChar;
	}

	public void open(){	
		System.out.print("<<");
	}

	public void print(){
		System.out.print(inputChar);
	}

	public void close(){
		System.out.println(">>");
	}	
}