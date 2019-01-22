public class Main{
	public static void main(String[] args){
		Directory root = new Directory("root");
		Directory bin = new Directory("bin");
		Directory tmp = new Directory("tmp");
		root.add(bin);
		root.add(tmp);
		bin.add(new File("vi", 10000));
		bin.add(new File("", 10000));
		root.accept(new ListVisit());
	}
}