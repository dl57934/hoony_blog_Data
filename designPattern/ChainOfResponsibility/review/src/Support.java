public abstract class Support {
    private String name;
    private Support next;

    public Support(String name){
        this.name = name;
    }

    public Support setNext(Support next){
        this.next = next;
        return next;
    }

    public void support(Trouble trouble){
        Support obj = this;
        while(true) {
            if (obj.resolve(trouble)) {
                obj.done(trouble);
                break;
            }else if(obj.next == null){
                obj.fail(trouble);
                break;
            } else{
                obj = obj.next;
            }
        }

    }

    protected abstract boolean resolve(Trouble trouble);

    protected void done(Trouble trouble){
        System.out.println("solve "+trouble+" by "+name);
    }

    protected void fail(Trouble trouble){
        System.out.println("Fail solve "+trouble+" more make Support");
    }
}
