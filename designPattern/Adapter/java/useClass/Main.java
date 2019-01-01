public class Main{
	public static void main(String[] args){
		BannerPrinter bnpr = new BannerPrinter(new Banner("이상훈"));
		bnpr.printStrong();
		bnpr.printWeek();
	}
}