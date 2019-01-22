public class Main{
	public static void main(String[] args){
		Directory rootdir = new Directory("root");
		Directory bin = new Directory("bin");
		Directory temp = new Directory("temp");
		Directory usr = new Directory("usr");
		rootdir.add(bin);
		rootdir.add(temp);
		rootdir.add(usr);
		bin.add(new File("vi", 10000));
		bin.add(new File("latex", 20000));
		rootdir.accept(new ListVisitor());
	}
}