public class TicketMaker {
    private static TicketMaker ticket = new TicketMaker();
    int totalTicket = 1000;
    private TicketMaker(){
        System.out.println("making ticket Instance");
    }
    int getNextTicketNumber(){
        ticket.totalTicket += 1;
        return ticket.totalTicket;
    }
    public static TicketMaker getInstance(){
        return ticket;
    }
}
