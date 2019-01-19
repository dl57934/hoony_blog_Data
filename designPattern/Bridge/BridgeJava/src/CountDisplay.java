public class CountDisplay extends Display{
    public CountDisplay(DisplayImpl display) {
        super(display);
    }

    public void countPrint(int count){
        open();
        for(int i=0; i <count; i++){
            print();
        }
        close();
    }
}
