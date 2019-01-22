import java.util.Iterator;
import java.util.ArrayList;
public class Directory extends Entry{
	String name;
	ArrayList dir = new ArrayList();
	public Directory(String name){
		this.name = name;
	}

	public String getName(){
		return name;
	}

	public int getSize(){
		int size = 0;
		Iterator it = getIterator();
		while(it.hasNext()){
			Entry entry = (Entry)it.next();
			size+=entry.getSize();
		}
		return size;
	}

	public void add(Entry entry){
		dir.add(entry);
	}

	public Iterator getIterator(){
		return dir.iterator();
	}

	public void accept(Visitor v){
		v.visit(this);
	}

}