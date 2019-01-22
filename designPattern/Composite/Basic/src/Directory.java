import java.util.ArrayList;
import java.util.Iterator;

public class Directory extends Entry{
    private String name;
    private int size = 0;
    private ArrayList documents = new ArrayList();

    public Directory(String name){
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public int getSize() {
        Iterator iterator = documents.iterator();
        while(iterator.hasNext()){
            Entry entry = (Entry)iterator.next();
            size+=entry.getSize();
        }
        return size;
    }

    @Override
    public void printLine(String prefix) {
        System.out.println(prefix+"/"+this);
        Iterator iterator = documents.iterator();
        while(iterator.hasNext()){
            Entry entry = (Entry) iterator.next();
            entry.printLine(prefix+"/"+entry.getName());
        }
    }

    @Override
    public Entry add(Entry entry) {
        documents.add(entry);
        return this;
    }
}