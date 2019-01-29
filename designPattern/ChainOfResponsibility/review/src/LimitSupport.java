public class LimitSupport  extends Support{
    int num;
    public LimitSupport(String name, int num){
        super(name);
        this.num = num;
    }
    @Override
    public boolean resolve(Trouble trouble) {
        if(num > trouble.getNum())
            return true;
        return false;
    }
}
