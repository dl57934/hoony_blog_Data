public class Main {
    public static void main(String[] args){
        Support limitSupport = new LimitSupport("limit",200);
        Support notSupport = new NotSupport("not");
        Support oddSupport = new OddSupport("odd");
        Support specialSupport = new SpecialSupport("special", 429);

        limitSupport.setNext(notSupport).setNext(oddSupport).setNext(specialSupport);

        for(int i = 0; i < 500; i++){
            limitSupport.support(new Trouble(i));
        }
    }
}
