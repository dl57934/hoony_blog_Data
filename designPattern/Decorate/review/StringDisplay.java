public class StringDisplay extends Display{
	String string;

	public StringDisplay(String string){
		this.string = string;
	}

	public int getRows(){
		return 1;
	}
	public int getColumns(){
		return string.getBytes().length;
	}
	public String getRowText(int line){
		if (line ==0)
			return string;
		else
			return null;
	}	
}