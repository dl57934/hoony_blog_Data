public abstract class Entry implements Element{
	public abstract int getSize();
	public abstract String getName();

	public String toString(){
		return getName() + " ("+getSize()+")";
	}
}