
public interface Mediator{
	public abstract void publishMessage(User sender, String message, User receiver);
	public abstract void addUser(User receiver);
}