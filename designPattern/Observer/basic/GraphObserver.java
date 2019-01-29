public class GraphObserver implements Observer{
	public void update(NumberGenerator generator){
		int number = generator.getNumber();
		System.out.print("GraphObserver: ");
		for(int i = 0; i < number; i++)
			System.out.print("*");
		
		System.out.println();
	}
}