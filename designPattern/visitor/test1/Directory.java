import java.util.Iterator;
import java.util.ArrayList;

public class Directory extends Entry{
	private String name;
	private ArrayList dirs = new ArrayList();
	public Directory (String name){
		this.name = name;
	}

	public String getName(){
		return name;
	}

	public int getSize(){
		int size = 0;
		Iterator it = iterator();
		while(it.hasNext()){
			Entry entry = (Entry)it.next();
			size+=entry.getSize();
		}
		return size;
	}

	public void add(Entry entry){
		dirs.add(entry);
	}

	public Iterator iterator(){
		return dirs.iterator();
	} 

	public void accept(Visitor visitor){
		visitor.visit(this);
	}
}