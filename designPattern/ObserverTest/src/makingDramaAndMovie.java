import java.util.ArrayList;
import java.util.Iterator;

public class makingDramaAndMovie {
    ArrayList observers = new ArrayList();
    String whatName;
    void add(Observer o){
        observers.add(o);
    }
    void notifyObeserver(Observer o){
        o.update(this);
    }
    void excute(){
        Iterator it = observers.iterator();
        while (it.hasNext()){
            this.whatName = "왔다 장보리";
            notifyObeserver((Observer) it.next());
        }
    }
}
