import java.util.Random;

public class RandomGenerator extends Generator{
	int number;
	public int getNumber(){
		return number;
	}
	public void generate(){
		for(int i = 0; i < 20; i++){
			Random random = new Random();
			number = random.nextInt(20);
			allNotify();
		}
	}
}