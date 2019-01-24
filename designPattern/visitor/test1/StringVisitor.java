import java.util.Iterator;

public class StringVisitor extends Visitor{
	String currentFolderName = "";
	String savedName;
	public void visit(File file){
		System.out.println(currentFolderName+"/"+file);
	}
	public void visit(Directory directory){
		System.out.println(currentFolderName+"/"+directory);
		Iterator iterator = directory.iterator();
		savedName = currentFolderName;
		currentFolderName = currentFolderName+"/"+directory.getName();
		while(iterator.hasNext()){
			Entry entry = (Entry)iterator.next();
			entry.accept(this);
		}
		currentFolderName = savedName;
	}
}