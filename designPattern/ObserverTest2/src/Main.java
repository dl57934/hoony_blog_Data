public class Main {
    public static void main(String[] args){
        makingChange makingChange = new makingChange();
        sanghoon sanghoon = new sanghoon();
        yeyoung yeyoung = new yeyoung();
        makingChange.addObserver(sanghoon);
        makingChange.addObserver(yeyoung);
        makingChange.excute();
    }
}
