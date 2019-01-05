package tv;

import framework.TvProduct;

public class Sony extends TvProduct{
	String name;
	String characteristic;

	public Sony(String name, String characteristic){
		this.name = name;
		this.characteristic = characteristic;
	}

	public void getInfo(){
		System.out.println("Sony회사의 " + this.characteristic+" 특징을 가진 "+ this.name+"입니다.");
	}
}