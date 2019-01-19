public class StringDisplayImpl extends DisplayImpl{
    String names;
    int limit;
    public StringDisplayImpl(String names){
        this.names = names;
        limit = names.getBytes().length;
    }
    @Override
    public void rawOpen() {
        printLine();
    }

    @Override
    public void rawPrint() {
        System.out.println("|" + names + "|");
    }

    @Override
    public void rawClose() {
        printLine();
    }

    private void printLine(){
        System.out.print("+" );
        for(int i =0; i < limit; i++)
            System.out.print("-");
        System.out.println("+");
    }
}
