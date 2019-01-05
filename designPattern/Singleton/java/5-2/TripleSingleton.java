public class TripleSingleton{
	private static TripleSingleton[] tripleSingleton =
		new TripleSingleton[]{
			new TripleSingleton(),
			new TripleSingleton(),
			new TripleSingleton()
		};

	private TripleSingleton(){}
	
	public static TripleSingleton getInstance(int id){
		return tripleSingleton[id];
	}	
}