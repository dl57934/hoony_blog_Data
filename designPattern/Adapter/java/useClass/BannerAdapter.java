public class BannerAdapter extends Print{
	Banner banner;
	public BannerAdapter(Banner banner){
		this.banner = banner;
	}
	public void printStrong(){
		this.banner.showWithParen();
	}
	public void printWeek(){
		this.banner.showWithAster();
	}
}