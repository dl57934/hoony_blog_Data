import java.util.ArrayList;
import java.util.Iterator;

public class ElementArrayList implements Element{
	ArrayList elementList = new ArrayList();

	public void add(Entry entry){
		elementList.add(entry);
	}

	public void accept(Visitor visit){
		Iterator it = elementList.iterator();
		while(it.hasNext()){
			Entry entry = (Entry)it.next();
			entry.accept(visit);
		}
	}
}