package Product;

import Factory.Cpu;
import Factory.Display;
import Factory.Ram;
import Factory.SmartPhoneFactory;

public class AnotherPhoneFactory extends SmartPhoneFactory {
    @Override
    public Cpu makeCpu() {
        return new QualcommCpu();
    }

    @Override
    public Ram makeRam() {
        return new SkHynix();
    }

    @Override
    public Display makeDisplay() {
        return new LgDisplay();
    }
}
