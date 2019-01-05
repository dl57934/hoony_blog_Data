import framework.*;
import tv.*;

public class Main{
	public static void main(String[] args){
		Factory factory = new tvFactory();
		Product card1 = factory.create("LG", "FullHD");
		Product card2 = factory.create("SamSung", "UHD");
		Product card3 = factory.create("LG", "8K");
		card1.getTvInfo();
		card2.getTvInfo();
		card3.getTvInfo();
	}
}