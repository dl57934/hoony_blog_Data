package Product;

import Factory.Ram;

public class SkHynix implements Ram {
    private String DEPSCRIPTION = "2 GB LPDDR3 SDRAM";
    @Override
    public String createRam() {
        return DEPSCRIPTION;
    }
}
