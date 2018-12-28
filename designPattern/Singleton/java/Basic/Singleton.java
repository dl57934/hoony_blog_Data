

public class Singleton{
	private static Singleton singleton = new Singleton();

	private Singleton(){
		System.out.println("호출 NO NO");
	}

	public static Singleton getInstance(){
		return singleton;
	} 
}