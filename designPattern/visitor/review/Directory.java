import java.util.ArrayList;
import java.util.Iterator;

public class Directory extends Entry{
	String name;
	ArrayList dirs = new ArrayList();
	public Directory(String name){
		this.name = name;
	}
	public String getName(){
		return name;
	}
	public int getSize(){
		Iterator it = iterator();
		int size = 0;
		while(it.hasNext()){
			Entry entry = (Entry)it.next();
			size+=entry.getSize();
		}	
		return size;
	}
	public Iterator iterator(){
		return dirs.iterator();
	}

	public void add(Entry entry){
		dirs.add(entry);
	}
	public void accept(Visitor v){
		v.visit(this);
	}
}