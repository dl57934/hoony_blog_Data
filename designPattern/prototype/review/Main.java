import product.*;
import prototype.*; 

public class Main{
	public static void main(String[] args){
		newLine line = new newLine("abcd");
		Manger manger = new Manger();
		manger.put("alphabet", line);
		Proto proto = manger.getCloneData("alphabet");
		proto.use("efgh");
	}
}