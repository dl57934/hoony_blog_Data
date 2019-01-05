import framework.*;
import tv.*;

public class Main{
	public static void main(String[] args){
		Factory factory = new TvFactory();
		TvProduct LG = factory.create("LG", "oled 64인치 5k화질", "시그니쳐 티비");
		TvProduct Samsung = factory.create("Samsung", "Qled 70인치 8k AI가 적용된 것이", "QN65Q900RAFXKR");
		LG.getInfo();
		Samsung.getInfo();
	}
}