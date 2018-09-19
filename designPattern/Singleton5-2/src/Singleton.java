public class Singleton {

    private static Singleton[] singleton = new Singleton[]{
            new Singleton(0),
            new Singleton(1),
            new Singleton(2)
    };
int id;
    private Singleton(int id){
        this.id = id;
        System.out.println("making Singleton");
    }

    public static Singleton getInstance(int i){
        return singleton[i];
    }
}
