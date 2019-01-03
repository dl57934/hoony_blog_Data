public class StringDisplay extends AbstractPrint{
	String outputString;
	int width;

	public StringDisplay(String inputString){
		outputString = inputString;
		this.width = inputString.getBytes().length;
	}

	public void open(){
		printLine();
	}

	public void print(){
		System.out.println("|"+outputString+"|");
	}

	public void close(){
		printLine();
	}

	public void printLine(){
		StringBuilder strBuilder = new StringBuilder();

		strBuilder.append("*");
		for(int i = 0; i < width; i++)
			strBuilder.append("-");
		strBuilder.append("*\n");
		System.out.print(strBuilder);
	}

}