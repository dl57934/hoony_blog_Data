public class BannerPrinter extends Print{
	Banner banner;

	public BannerPrinter(Banner banner){
		this.banner = banner;
	}

	public void printWeek(){
		banner.showWithParen();
	}
	public void printStrong(){
		banner.showWithAster();
	}
}