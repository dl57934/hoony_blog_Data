public class Main {
    public static void main(String[] args){
        StringDisplay d1 = new StringDisplay("Decorator");
        SideBorder d2 = new SideBorder(d1, '#');
        FullBorder d3 = new FullBorder(d2);
        d1.show();
        d2.show();
        d3.show();
    }
}
