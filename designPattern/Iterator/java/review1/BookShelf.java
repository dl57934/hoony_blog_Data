public class BookShelf implements Aggregate{
	Book[] books;
	int index = 0;

	public BookShelf(int maxSize){
		this.books = new Book[maxSize];
	}

	public Book getBookAt(int index){
		return this.books[index];
	}

	public void appendBook(String name){
		this.books[this.index] = new Book(name);
		this.index+=1;
	}

	public int getLength(){
		return this.index;
	}

	public Iterator iterator(){
		return new BookShelfIterator(this);
	}
}