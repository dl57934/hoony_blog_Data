package framework;

public abstract class Factory{
	public Product create(String company, String resolution){
		Product p = createProduct(company, resolution);
		registerProduct(p);
		return p;
	}

	public abstract Product createProduct(String company, String resolution);
	public abstract void registerProduct(Product product);
}