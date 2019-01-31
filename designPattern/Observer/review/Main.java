public class Main{
	public static void main(String[] args){
		Generator generator = new RandomGenerator();
		NumberObserver nObserver = new NumberObserver();
		PrintObserver pObserver = new PrintObserver();
		generator.addObserver(nObserver);
		generator.addObserver(pObserver);
		generator.generate();
	}
}