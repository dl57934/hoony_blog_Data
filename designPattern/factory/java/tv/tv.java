package tv;
import framework.*;
import java.util.*;

public class tv extends Product{
	private String company; 
	private String resolution;

	public tv(String company, String resolution){
		this.company = company;
		this.resolution = resolution;	
		System.out.println(company+"회사의 "+resolution+"화질로 tv가 만들어졌습니다.");
	}

	public void getTvInfo(){
		System.out.println(this.company + "회사의 "+ this.resolution+"화질인 제품입니다.");
	}
}
