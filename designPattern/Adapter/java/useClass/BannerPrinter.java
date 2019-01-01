public class BannerPrinter extends Print{
	Banner banner;
	public BannerPrinter(Banner banner){
		this.banner = banner;
	}

	public void printStrong(){
		this.banner.showWithParen();
	}

	public void printWeek(){
		this.banner.showWithAster();
	}

}