import framework.*;
import anonymous.*;

public class Main {
	public static void main(String[] args) {
		Manger manger = new Manger();
		MessageBox sMessage = new MessageBox('*');
		MessageBox wMessage = new MessageBox('/');
		UnderlinePen uMessage = new UnderlinePen('_');
		manger.register("sMessage", sMessage);
		manger.register("wMessage", wMessage);
		manger.register("uMessage", uMessage);

		Product p1 = manger.create("sMessage");
		Product p2 = manger.create("wMessage");
		Product p3 = manger.create("uMessage");
		p1.use("Hello ProtoType");
		p2.use("Hello ProtoType");
		p3.use("Hello ProtoType");
	}
}
