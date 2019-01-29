public class Main {
    public static void main(String[] args){
        Support odd = new OddSupport("odd");
        Support speicial = new SpecialSupport("special", 300);
        Support notSupport = new NotSupport("not Support");
        Support limit = new LimitSupport("limit", 200);

        odd.setNext(speicial).setNext(notSupport).setNext(limit);
        for(int i =0; i < 500; i++){
            odd.support(new Trouble(i));
        }
    }
}
