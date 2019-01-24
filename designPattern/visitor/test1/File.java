public class File extends Entry{
	String name;
	int size;

	public File(String name, int size){
		this.name = name;
		this.size = size;
	}

	public int getSize(){
		return size;
	}

	public String getName(){
		return name;
	}

	public void accept(Visitor visitor){
		visitor.visit(this);
	}
}