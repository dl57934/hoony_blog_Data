import java.util.Iterator;
public class ListVisit extends Visitor{
	String currentDirectory="";
	public void visit(File file){
		System.out.println(currentDirectory+"/"+file);
	}
	public void visit(Directory directory){
		System.out.println(currentDirectory+"/"+directory);
		currentDirectory = currentDirectory+"/"+directory;
		Iterator it = directory.iterator();
		while(it.hasNext()){
			Entry entry = (Entry)it.next();
			entry.accept(this);
		}
	}
}