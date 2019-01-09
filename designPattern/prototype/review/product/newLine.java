package product;

import prototype.*;

public class newLine extends Proto{
	String strLeck;
	public newLine(String leck){
		this.strLeck = leck;
	}

	public void use(String s){
		StringBuilder strBuilder = new StringBuilder();
		for(int i = 0; i < s.length(); i++)
			strBuilder.append(strLeck).append(s+s).append("\n");
		System.out.println(strBuilder);
	}
}