public class Main{
	public static void main(String[] args){
		NumberGenerator generator = new RandomNumberGenerator();
		Observer digit = new DigitObserver(); 
		Observer graph = new GraphObserver();
		generator.addObserver(digit);
		generator.addObserver(graph);
		generator.execute();
	}
}