import java.util.Iterator;
import java.util.ArrayList;

public abstract class Generator{
	ArrayList observers = new ArrayList();
	public void addObserver(Observer observer){
		observers.add(observer);
	}
	public void allNotify(){
		Iterator it = observers.iterator();
		while(it.hasNext()){
			Observer observer = (Observer)it.next();
			observer.update(getNumber());
		}
	}
	public abstract int getNumber();
	public abstract void generate();
}