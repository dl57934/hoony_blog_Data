public class UpDownBorder extends Border{
    char upDown;
    public UpDownBorder(Display display, char upDown){
        super(display);
        this.upDown = upDown;
    }

    @Override
    public int getRows() {
        return 1 + display.getRows() + 1;
    }

    @Override
    public int getColumns() {
        return display.getColumns();
    }

    @Override
    public String getRowText(int line) {
        if(line == 0)
            return makeLine(display.getColumns());
        else if(line == display.getRows()+1)
            return makeLine(display.getColumns());
        else
            return display.getRowText(line-1);
    }

    private String makeLine(int limit){
        StringBuilder builder = new StringBuilder();
        for(int i = 0; i < limit; i++)
            builder.append(upDown);
        return builder.toString();
    }
}
