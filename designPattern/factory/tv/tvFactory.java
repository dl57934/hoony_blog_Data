package tv;
import java.util.*;
import framework.*;

public class tvFactory extends Factory{
	private List <tv> owners = new ArrayList();
	public Product createProduct(String company, String resolution){
		return new tv(company, resolution);
	}

	public void registerProduct(Product product){
		owners.add((tv)product);
	}

	public List getOwners(){
		return owners;
	}
}