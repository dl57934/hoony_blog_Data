public class BannerPrint extends Banner implements Print{

	public BannerPrint(String name){
		super(name);
	}

	public void printWeek(){
		showWithParen();
	}

	public void printStrong(){
		showWithAster();
	}

}