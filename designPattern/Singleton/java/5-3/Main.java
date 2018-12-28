public class Main extends Thread{
	public static void main(String[] args){
		new Main("A").start();
		new Main("B").start();
		new Main("C").start();
	}

	public void run(){
		System.out.println(getName()+" mkaing Thread  Address: "+Singleton.getInstance());
	}

	public Main(String name){
		super(name);
	}
}