public class BookShelfIterator implements Iterator{

	BookShelf bookShelf;
	int index;

	public BookShelfIterator(BookShelf bookShelf){
		this.bookShelf = bookShelf;
		this.index = 0;
	}

	public Object next(){
		Book book = bookShelf.getBookAt(this.index);
		this.index++;
		return book;
	}

	public Boolean hasNext(){
	if (this.bookShelf.getLength() > this.index)	
		return true;
	else
		return false;
	}
}