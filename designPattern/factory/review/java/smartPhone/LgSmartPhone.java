package smartPhone;

import frameWork.*;

public class LgSmartPhone extends Product{
	String phoneName, ficture;

	public LgSmartPhone(String phoneName, String ficture){
		this.phoneName = phoneName;
		this.ficture = ficture;
		System.out.println("삐빅 LG 공장에서 "+phoneName+"이 만들어졋습니다.");
	}
	public String getSpec(){
		return "선택하신 "+phoneName+"의 스펙은 "+ficture+"입니다.";
	}

}