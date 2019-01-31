public class PrintObserver implements Observer{
	public void update(int number){
		for(int i = 0; i < number; i++)
			System.out.print("*");
		System.out.println();
	}
}