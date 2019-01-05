public class BookShelf implements Aggregate{
	Book[] books;
	int index;
	public BookShelf(){
		this.books = new Book[10];
		int inedx = 0;
	}

	public void append(Book book){
		this.books[index] = book;
		index++;
	}

	public Book getBookAt(int index){
		return this.books[index];
	}

	public int getLength(){
		return this.index;
	}

	public Iterator iterator(){
		return new BookShelfIterator(this);
	}
}