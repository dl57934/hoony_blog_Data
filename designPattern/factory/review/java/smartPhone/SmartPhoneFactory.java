package smartPhone;

import frameWork.*;
import java.util.*;

public class SmartPhoneFactory extends Factory{
	List<Product> shelf = new ArrayList<Product>();

	protected Product createProduct(String company, String phoneName, String ficture){
		
		switch(company){
			case "LG":
				return new LgSmartPhone(phoneName, ficture);
				
			case "Samsung":
				return new SamsungSmartPhone(phoneName, ficture);
				
			case "Apple":
				return new IphoneSmartPhone(phoneName, ficture);
				
			default:
				return new LgSmartPhone(phoneName, ficture);
				
		}
		
	}
	protected void registerProduct(Product product){
		shelf.add(product);
	}
}