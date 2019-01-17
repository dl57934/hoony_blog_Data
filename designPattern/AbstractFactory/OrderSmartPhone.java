import Factory.SmartPhoneFactory;
import Product.AnotherPhoneFactory;
import Product.LgFactory;
import Product.SamsungFactory;

public class OrderSmartPhone {
    public static SmartPhoneFactory makeFactory(String type){
        switch(type){
            case "Samsung":
                return new SamsungFactory();
            case "LG":
                return new LgFactory();
            default:
                return new AnotherPhoneFactory();
        }
    }
}
