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
		SizeVisitor sizeVisitor = new SizeVisitor();
		accept(sizeVisitor);
		return sizeVisitor.getSize();
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