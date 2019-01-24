import java.util.Iterator;
import java.util.ArrayList;

public class FileFindVisitor extends Visitor{
	private String findFormat, currentFile = "";
	private ArrayList findFileList = new ArrayList();
	public FileFindVisitor(String findFormat){
		this.findFormat = findFormat;
	}
	public void visit(File file){
		if(file.getName().contains(findFormat)){
			findFileList.add(file);
		}
	}
	public void visit(Directory directory){
		currentFile = currentFile+"/"+directory.getName();
		Iterator it = directory.iterator();
		while(it.hasNext()){
			Entry entry = (Entry)it.next();
			entry.accept(this);
		}
	}

	public Iterator getFoundFiles(){
		return findFileList.iterator();
	}

}