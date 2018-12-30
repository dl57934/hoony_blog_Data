public class BookShelfIterator implements Iterator{

	static final int EMPTY_BOOK = 0;

	BookShelf bookShelf;
	int index;

	public BookShelfIterator(BookShelf bookShelf){
		this.bookShelf = bookShelf;
		this.index = 0;
	}

	public boolean hasNext(){
		if(this.index < this.bookShelf.getLength())
			return true;

		return false;
	}
	public Object next(){
		Book book = this.getBook(this.index);
		this.index+=1;
		return book;
	}

	public Object previous(){
		if(this.index-1 < EMPTY_BOOK)
			return this.indexError();
		else{
			Book book = getBook(this.index-1);
			this.index-=1;
			return book;
		}
	}

	public Book getBook(int index){
		return this.bookShelf.getBookAt(index);
	}

	public Book indexError(){
		return new Book("index Error index < 0");
	}
}