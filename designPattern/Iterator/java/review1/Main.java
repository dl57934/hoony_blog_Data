public class Main{
	public static void main(String[] args){
		BookShelf itBookShelf = new BookShelf(5);

		itBookShelf.appendBook("CleanCode");
		itBookShelf.appendBook("Design Pattern");
		itBookShelf.appendBook("head First java");
		itBookShelf.appendBook("jump to Python");

		Iterator it = itBookShelf.iterator();

		while(it.hasNext()){
			Book book = (Book)it.next();
			System.out.println(book.getName());
		}
	}
}