package Product;

import Factory.Ram;

public class SamsungRam implements Ram {
    private String DEPSCRIPTION = "2 GB LPDDR2 SDRAM";
    @Override
    public String createRam() {
        return DEPSCRIPTION;
    }
}
