public class SideBorder extends Border{
	char side;
	public SideBorder(Display display, char side){
		super(display);
		this.side = side;
	}

	public int getRows(){
		return display.getRows();
	}
	public int getColumns(){
		return 1+display.getColumns()+1;
	}
	public String getRowText(int line){
		return side+display.getRowText(line)+side;
	}
}