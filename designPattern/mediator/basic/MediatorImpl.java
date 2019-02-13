import java.util.*;

public class MediatorImpl implements Mediator{
	ArrayList<User> favorites = new ArrayList<User>();
	public void publishMessage(User sender, String message, User receiver){
		if(receiver != null)
			System.out.println("발신인 "+ sender.name +" 내용: "+message + " 수신인: "+receiver.name);
		else{
			Iterator it = favorites.iterator();
			while(it.hasNext()){
				User user = (User)it.next();
				sender.sendMessage(message, user);
			}
		}
	}
	public void addUser(User receiver){
		favorites.add(receiver);
	}
}