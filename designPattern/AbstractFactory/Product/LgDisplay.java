package Product;

import Factory.Display;

public class LgDisplay implements Display {
    private String DEPSCRIPTION = "5.5인치 WQHD LGD IPS TFT-LCD";
    @Override
    public String createDisplay() {
        return DEPSCRIPTION;
    }
}
