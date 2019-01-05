public class Main {
	public static void main(String[] args){
		TicketMaker tm = TicketMaker.getInstance();

		System.out.println(tm.getNextTicketNumber());
	}
}