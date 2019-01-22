import java.util.Iterator;

public class ListVisit extends Visitor{
	String currentDirectory="";
	String savedString ="";
	public void visit(File file){
		System.out.println(currentDirectory+"/"+file);
	}
	public void visit(Directory directory){
		System.out.println(currentDirectory+"/"+directory);
		savedString = currentDirectory;
		currentDirectory = "/"+directory.getName();
		Iterator it = directory.iterator();
		while(it.hasNext()){
			Entry entry = (Entry)it.next();
			entry.accept(this);
		}
		currentDirectory = savedString;
	}
}