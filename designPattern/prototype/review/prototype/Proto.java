package prototype;

public abstract class Proto implements Cloneable{

	public abstract void use(String s);

	public Proto cloneObject(){
		Proto proto = null;
		try{
			proto = (Proto)clone();
		}catch (CloneNotSupportedException e){
			e.printStackTrace();
		}
		return proto;
	}
}