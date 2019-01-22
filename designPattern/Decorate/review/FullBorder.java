public class FullBorder extends Border{
	
	public FullBorder(Display display){
		super(display);	
	}

	public int getRows(){
		return 1+display.getRows()+1;
	}
	public int getColumns(){
		return 1+display.getColumns()+1;
	}
	public String getRowText(int line){
		if(line == 0)
			return "+"+makeLine(display.getColumns())+"+";
		else if(line == display.getRows()+1)
			return "+"+makeLine(display.getColumns())+"+";
		else
			return "|"+ display.getRowText(line-1)+"|";
	}
	private String makeLine(int limit){
		StringBuilder stringBuilder = new StringBuilder();
		for(int i =0; i < limit; i++)
			stringBuilder.append("-");
		return stringBuilder.toString();
	}
}