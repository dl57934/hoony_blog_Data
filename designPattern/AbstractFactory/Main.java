import Factory.SmartPhoneFactory;


public class Main {
    public static void main(String[] args){
        SmartPhoneFactory galaxyS3 = OrderSmartPhone.makeFactory("Samsung");
        System.out.println(galaxyS3.assemble("Galaxy S3"));
        SmartPhoneFactory LgG3 = OrderSmartPhone.makeFactory("LG");
        System.out.println(LgG3.assemble("LG G3"));
    }
}

