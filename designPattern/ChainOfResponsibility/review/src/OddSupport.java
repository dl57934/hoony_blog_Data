public class OddSupport extends Support{

    public OddSupport(String name){
        super(name);
    }

    @Override
    public boolean resolve(Trouble trouble) {
        if(trouble.getNum()%2==0)
            return false;
        return true;
    }
}
