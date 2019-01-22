public abstract class Entry{
    public abstract String getName();
    public abstract int getSize();

    public void printLine(){
        printLine("");
    }
    public abstract void printLine(String prefix);

    public abstract Entry add(Entry entry);

    public String toString(){
        return "/"+getName()+" ("+getSize()+")";
    }
}