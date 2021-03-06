package anonymous;

import framework.*;

public class MessageBox extends Product {
    char dechar;

    public MessageBox(char dechar) {
        this.dechar = dechar;
    }

    public void use(String s) {
        int length = s.getBytes().length;
        for (int i = 0; i < length + 4; i++)
            System.out.print(dechar);
        System.out.println();
        System.out.println(dechar + " " + s + " " + dechar);
        for (int i = 0; i < length + 4; i++)
            System.out.print(dechar);
        System.out.println();
    }
}