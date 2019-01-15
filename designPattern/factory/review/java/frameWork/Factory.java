package frameWork;

public abstract class Factory{

	public final Product create(String company, String phoneName, String ficture){
		Product p = createProduct(company, phoneName, ficture);
		registerProduct(p);
		return p;
	} 

	protected abstract Product createProduct(String company, String phoneName, String ficture);
	protected abstract void registerProduct(Product product);
}