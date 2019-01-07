package framework;

import java.util.*;

public class Manger {
	HashMap showCase = new HashMap();

	public void register(String name, Product product) {
		showCase.put(name, product);
	}

	public Product create(String name) {
		Product p = (Product) showCase.get(name);
		return p.createClone();
	}

}