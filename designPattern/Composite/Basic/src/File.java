
public class File extends Entry{
    String name;
    int size;
    public File(String name, int size){
        this.name = name;
        this.size = size;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public int getSize() {
        return size;
    }

    @Override
    public void printLine(String prefix) {
        System.out.println(prefix+"/"+this);
    }

    @Override
    public Entry add(Entry entry) {
        return null;
    }
}