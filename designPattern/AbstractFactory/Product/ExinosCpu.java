package Product;

import Factory.Cpu;

public class ExinosCpu implements Cpu {
    private String DEPSCRIPTION = "삼성 엑시노스 4 Quad";

    @Override
    public String createCpu() {
        return DEPSCRIPTION;
    }
}
