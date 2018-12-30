public class Main{
	public static void main(String[] args){
		BookShelf itBookShelf = new BookShelf(5);

		itBookShelf.appendBook("CleanCode");
		itBookShelf.appendBook("Design Pattern");
		itBookShelf.appendBook("head First java");
		itBookShelf.appendBook("jump to Python");

		Iterator it = itBookShelf.iterator();

			Book book = (Book)it.next();
			System.out.println(book.getName());
			book = (Book)it.previous();
			System.out.println(book.getName());
	}
}