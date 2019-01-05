package framework;

public abstract class Factory{
	public TvProduct create(String company, String characteristic, String name){
		TvProduct p = createTV(company, characteristic, name);
		registerTV(p);
		return p;
	}

	public abstract TvProduct createTV(String company, String characteristic, String name);
	public abstract void registerTV(TvProduct tv);
}	