import java.util.GregorianCalendar;

public class Main{
   public static void main(String[] args){
      GregorianCalendar today = new GregorianCalendar();
      System.out.println("현재 년도: "+today.get(today.YEAR)+"년");
      System.out.println("현재 월: "+(today.get(today.MONTH)+1)+"월");
      System.out.println("현재 일: "+today.get(today.DATE)+"일\n");
      System.out.println("현재 시: "+today.get(today.HOUR)+"시");
      System.out.println("현재 분: "+today.get(today.MINUTE)+"분");
      System.out.println("현재 초: "+today.get(today.SECOND)+"초\n");

      System.out.println("요일: "+today.get(today.DAY_OF_WEEK)); // 일요일 1 ~ 토요일 7
      System.out.println("2019년은 "+(today.get(today.DAY_OF_YEAR)-1)+"일 지났습니다.");
   }
}