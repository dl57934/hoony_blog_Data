public class Singleton {
    private static Singleton singleton = new Singleton();
    //다른 곳에서 new Singleton()을
    //즉 인스턴스를 못만들게 하기 위해서
    //private로 선언 했다.
    private Singleton(){
        System.out.println("making Singleton ");
    }
    //static 메소드를 만들어 줌으로 써
    //클래스명.메소드이름()으로 호출 가능하다.
    static Singleton getInstance(){
        return singleton;
    }
}
