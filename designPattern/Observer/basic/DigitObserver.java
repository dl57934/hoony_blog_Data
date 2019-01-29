public class DigitObserver implements Observer{
	public void update(NumberGenerator generator){
		int number = generator.getNumber();
		System.out.println("DigitObserver: "+number);
	}
}