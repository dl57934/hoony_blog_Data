public class BookShelf implements Aggregate{

	private int last = 0;
	private Book[] books;

	public BookShelf(int maxSize){
		this.books = new Book[maxSize];
	}

	public Book getBookAt(int index){
		return this.books[index];
	}

	public void appendBook(Book newBook){
		this.books[last] = newBook;
		last++;
	}

	public int getLength(){
		return this.last;
	}

	public Iterator iterator(){
		return new BookShelfIterator(this);
	}
}