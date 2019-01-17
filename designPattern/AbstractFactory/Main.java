import Factory.SmartPhoneFactory;
import Product.LgFactory;
import Product.SamsungFactory;

public class Main {
    public static void main(String[] args){
        SmartPhoneFactory galaxyS3 = new SamsungFactory();
        System.out.println(galaxyS3.assemble("Galaxy S3"));
        SmartPhoneFactory LgG3 = new LgFactory();
        System.out.println(LgG3.assemble("LG G3"));
    }
}
