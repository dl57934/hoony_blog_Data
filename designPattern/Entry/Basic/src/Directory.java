import java.util.ArrayList;
import java.util.Iterator;

public class Directory extends Entry{
    private String name;
    private ArrayList<Entry> dictionary = new ArrayList<>();
    public Directory(String name){
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public int getSize() {
        Iterator<Entry> iterator = dictionary.iterator();
        int size = 0;
        while(iterator.hasNext()) {
            Entry entry = iterator.next();
            size+=entry.getSize();
        }
        return size;
    }

    @Override
    public Entry add(Entry entry) {
        dictionary.add(entry);
        return this;
    }

    @Override
    public void printList(String prefix) {
        System.out.println(prefix+"/"+this);
        Iterator<Entry> iterator = dictionary.iterator();
        while(iterator.hasNext()){
           Entry entry = iterator.next();
           entry.printList(prefix+"/"+name);
        }
    }
}