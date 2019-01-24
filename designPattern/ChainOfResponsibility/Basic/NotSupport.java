public class NotSupport extends Support{
	public NotSupport(String name){
		super(name);
	}

	protected boolean resolve(Trouble trouble){
		return false;
	}
}