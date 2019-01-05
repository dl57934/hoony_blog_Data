package framework;

public abstract class Factory{
	public final Product create(String owner){
		Product p = createProduct(owner);
		regeisterProduct(p);
		return p;
	}

	protected abstract Product createProduct(String owner);
	protected abstract void regeisterProduct(Product product);
}