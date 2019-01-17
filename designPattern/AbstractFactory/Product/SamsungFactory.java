package Product;

import Factory.Cpu;
import Factory.Display;
import Factory.Ram;
import Factory.SmartPhoneFactory;

public class SamsungFactory extends SmartPhoneFactory {
    @Override
    public Cpu makeCpu() {
        return new ExinosCpu();
    }

    @Override
    public Ram makeRam() {
        return new SamsungRam();
    }

    @Override
    public Display makeDisplay() {
        return new SamsungDisplay();
    }
}
