public class BookShelfIterator implements Iterator{

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
		Book book = bookShelf.getBookAt(this.index);
		this.index+=1;
		return book;
	}
}