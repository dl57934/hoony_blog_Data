import frameWork.*;
import smartPhone.*;

public class Main{
	public static void main(String[] args){
		Factory factory = new SmartPhoneFactory();
		Product LG = factory.create("LG", "V 40", "Quadrable Camera and new Stylish Pen and penta Core CPU and 32GB Ram");
		Product Samsung = factory.create("Samsung", "Galaxy Node X", "Quadrable Camera and new Stylish Pen and penta Core CPU and 32GB Ram");
		System.out.println(LG.getSpec());
		System.out.println(Samsung.getSpec());
	}
}