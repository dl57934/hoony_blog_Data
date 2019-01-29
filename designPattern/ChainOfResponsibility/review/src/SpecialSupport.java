public class SpecialSupport extends Support{
    int speicalNum;
    public SpecialSupport(String name, int number){
        super(name);
        speicalNum = number;
    }
    @Override
    public boolean resolve(Trouble trouble) {
        if(speicalNum == trouble.getNum())
            return true;
        return false;
    }
}
