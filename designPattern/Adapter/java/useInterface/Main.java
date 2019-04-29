import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Main {

    int vi =2;
    class InstanceInner {
        int iv = 100;
        final static int CONST = 100;
        final int gigi =1;
        public void setVi() {
        }
    }


	public static void main(String[] args){
        System.out.println(InstanceInner.CONST);
		Print print = new BannerAdapter("Hello Hoony's blog");
		print.printWeek();
		print.printStrong();
	}


	public void hihi(){
        new InstanceInner().setVi();
    }


//
}