public class Main {
    public static void main(String[] args){
        TicketMaker oneInstance = TicketMaker.getInstance();

        for (int i = 0; i< 100; i++)
            System.out.println(oneInstance.getNextTicketNumber());
    }
}
