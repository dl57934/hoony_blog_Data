
public class Main{
	public static void main(String[] args){
		Singleton singleton1 = Singleton.getInstance();
		Singleton singleton2 = Singleton.getInstance();

		if(singleton1.equals(singleton2)){
			System.out.println("같아같아");
		}else{
			System.out.println("달라 달라");
		}
	}
}