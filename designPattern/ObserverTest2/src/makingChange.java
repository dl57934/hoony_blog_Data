import java.util.ArrayList;
import java.util.Iterator;

public abstract class makingChange implements Observer {
    ArrayList observers = new ArrayList();
    int sonofSon = 0;
    public void addObserver(Observer o){
        observers.add(o);
    }

    public void Allnotify(){
        Iterator iterator = observers.iterator();
        while (iterator.hasNext()){
            Observer o = (Observer) iterator.next();
            o.update(this);
        }
    }
    public void excute(){
        sonofSon+=1;
        Allnotify();
    }
}
