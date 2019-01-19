public class Main {
    public static void main(String[] args){
        Display d1= new Display(new StringDisplayImpl("hi hi Bridge"));
        Display d2 = new Display(new StringDisplayImpl("hi hi hi Bridge 2"));
        CountDisplay countDisplay = new CountDisplay(new StringDisplayImpl("hello Harry Porter"));
        d1.display();
        d2.display();
        countDisplay.display();
        countDisplay.countPrint(5);
    }
}
