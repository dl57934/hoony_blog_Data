public class Main{
	public static void main(String[] args){
		BookShelf bookShelf = new BookShelf(5);

		appendBookAtShelf(bookShelf ,"CleanCode");
		appendBookAtShelf(bookShelf ,"Design Pattern");
		appendBookAtShelf(bookShelf ,"getOut");
		appendBookAtShelf(bookShelf ,"Fire");

		Iterator it = bookShelf.iterator();

		while(it.hasNext()){
			Book book = (Book)it.next();
			System.out.println(book.getName());
		}
	}

	public static void appendBookAtShelf(BookShelf bookShelf ,String name){
		bookShelf.appendBook(new Book(name));
	}

}