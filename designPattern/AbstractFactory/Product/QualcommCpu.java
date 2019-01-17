package Product;

import Factory.Cpu;

public class QualcommCpu implements Cpu {
    private final String DEPSCRIPTION = "퀄컴 스냅드래곤 801";
    @Override
    public String createCpu() {
        return DEPSCRIPTION;
    }
}
