public class User{
	String name;
	Mediator mediator;
	public User(String name, Mediator mediator){
		this.name = name;
		this.mediator = mediator;
		mediator.addUser(this);
	}

	public void sendMessage(String message, User receiver){
		mediator.publishMessage(this, message, receiver);
	}
}