
public class Main{
	public static void main(String[] args){
		BookShelf bookShelf = new BookShelf();
		bookShelf.append(new Book("CleanCode"));
		bookShelf.append(new Book("Design Pattern"));
		bookShelf.append(new Book("Java"));
		bookShelf.append(new Book("Python"));
		bookShelf.append(new Book("Tensorflow"));

		Iterator it = bookShelf.iterator();

		while(it.hasNext()){
			Book book = (Book)it.next();
			System.out.println(book.getName());
		}
		
	}
}