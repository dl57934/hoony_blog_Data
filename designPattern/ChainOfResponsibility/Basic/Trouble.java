public class Trouble{
	private int number;//Trouble 번호
	public Trouble(int number){
		this.number = number; 
	}

	public int getNumber(){
		return number;
	}

	public String toString(){
		return "[Trouble "+number+"]";
	}
}