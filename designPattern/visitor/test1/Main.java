import java.util.Iterator;
public class Main{
	public static void main(String[] args){
		Directory root1 = new Directory("root1");
		Directory root2 = new Directory("root2");
		root1.add(file("diary.html", 10));
		root1.add(file("index.html", 10));
		root2.add(file("diary.html", 1000));
		root2.add(file("index.html", 1000));

		ElementArrayList list = new ElementArrayList();
		list.add(root1);
		list.add(root2);
		list.add(file("etc.html", 1234));
		list.accept(new StringVisitor());

		// Directory bin = new Directory("bin");
		// Directory usr = new Directory("usr");
		// File vi = new File("vi", 10000);
		// File basic = new File("basic", 20000);
		// root.add(temp);
		// root.add(bin);
		// root.add(usr);
		// bin.add(vi);
		// bin.add(basic);
		
		// Directory Kim = new Directory("Kim");
		// Directory Lee = new Directory("Lee");
		// Directory Park = new Directory("Park");
		// usr.add(Kim);
		// usr.add(Lee);
		// usr.add(Park);
		// Kim.add(file("diary.html", 100));
		// Kim.add(file("Composite.java", 200));
		// Lee.add(file("memo.tex", 100));
		// Lee.add(file("index.html", 100));
		// Park.add(file("game.doc", 100));
		// Park.add(file("junk.mail", 100));

		// StringVisitor strVisitor = new StringVisitor();
		// root.accept(strVisitor);
		// FileFindVisitor ffv = new FileFindVisitor(".html");
		// root.accept(ffv);

		// System.out.println("HTML files are:");
		// Iterator it = ffv.getFoundFiles();

		// while(it.hasNext()){
		// 	File file = (File)it.next();
		// 	System.out.println(file.toString());
		// }
	}	

	public static File file(String name, int size){
		return new File(name, size);
	}
}
