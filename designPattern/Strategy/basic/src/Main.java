import java.util.Random;

public class Main {
    public static void main(String[] args){
        Player player1 = new Player("호날두", new WinningStrategy(314));
        Player player2 = new Player("메시", new ProbStrategy(15));

        for (int i =0; i < 10000; i++){
            int random1 = new Random().nextInt(200);
            int random2 = new Random().nextInt(200);
            Hand nextHand1 = player1.nextHand();
            Hand nextHand2 = player2.nextHand();
            if(nextHand1.isStrongerThan(nextHand2)){
                System.out.println("Winner:" +player1);
                player1.win();
                player2.lose();
            }
            else if(nextHand2.isStrongerThan(nextHand1)){
                System.out.println("Winner:" +player2);
                player1.lose();
                player2.win();
            }else{
                System.out.println("Even....");
                player1.even();
                player2.even();
            }
            if( i%2 ==0) {
                player1.setStrategy(new ProbStrategy(random1));
                player2.setStrategy(new WinningStrategy(random2));
            }else{
                player1.setStrategy(new WinningStrategy(random2) );
                player2.setStrategy(new ProbStrategy(random1));
            }
        }

        System.out.println("Total result:");
        System.out.println(player1.toString());
        System.out.println(player2.toString());
    }
}
