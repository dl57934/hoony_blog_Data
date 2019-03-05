public class BannerAdapter extends Banner implements Print{
	public BannerAdapter(String name){
		super(name);
	}
	@Override
	public void printStrong() {
		printAster();
	}

	@Override
	public void printWeek() {
		printParen();
	}
}