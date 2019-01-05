import framework.*;
import idcard.*;

public class Main{
	public static void main(String[] args){
		Factory factory = new IDCardFactory();
		Product card1 = factory.create("이상훈");
		Product card2 = factory.create("최승호");
		Product card3 = factory.create("강준현");
		card1.use();
		card2.use();
		card3.use();
	}
}