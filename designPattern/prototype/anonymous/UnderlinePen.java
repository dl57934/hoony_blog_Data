package anonymous;

import framework.*;

public class UnderlinePen implements Product {
    char dechar;

    public UnderlinePen(char dechar) {
        this.dechar = dechar;
    }

    public void use(String s) {
        int length = s.getBytes().length;
        System.out.println(dechar + s + dechar);
        for (int i = 0; i < length + 4; i++)
            System.out.print(dechar);
        System.out.println();
    }

    public Product cloneObject() {
        Product p = null;
        try {
            p = (Product) clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return p;
    }
}