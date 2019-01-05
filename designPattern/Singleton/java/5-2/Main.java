public class Main{
	public static void main(String[] args){
		TripleSingleton obj1 = TripleSingleton.getInstance(0);
		TripleSingleton obj2 = TripleSingleton.getInstance(1);
		TripleSingleton obj3 = TripleSingleton.getInstance(2);
		if(!obj1.equals(obj2)){
			System.out.println("다르다");
		}
	}
}