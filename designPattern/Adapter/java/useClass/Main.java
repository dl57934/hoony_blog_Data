public class Main{
	public static void main(String[] args){
		Print print = new BannerAdapter(new Banner("Hello Hoony's Blog"));
		print.printStrong();
		print.printWeek();
	}
}