public class File extends Entry{
	String name;
	int size;
	public File(String name, int size){
		this.name = name;
		this.size = size;
	}
	public String getName(){
		return name;
	}
	public int getSize(){
		return size;
	}
	public void accept(Visitor v){
		v.visit(this);
	}
}