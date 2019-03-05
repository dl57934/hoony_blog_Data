public class Banner{
	String name;
	public Banner(String name){
		this.name = name;
	}

	public void printAster(){
		System.out.println("*"+this.name+"*");
	}

	public void printParen(){
		System.out.println("("+this.name+")");
	}
}