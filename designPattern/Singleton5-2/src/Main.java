public class Main {
    public static void main(String[] args){
        Singleton second = Singleton.getInstance(2);
        Singleton first = Singleton.getInstance(0);
        if (second == first){
            System.out.println("asdasdasd");
        }else {
            System.out.println("not same");
        }
    }
}
