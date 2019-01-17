package Product;

import Factory.Display;

public class SamsungDisplay implements Display {
    private String DESCRIPTION = "4.8인치 HD 삼성 HD Super AMOLED";
    @Override
    public String createDisplay() {
        return DESCRIPTION;
    }
}
