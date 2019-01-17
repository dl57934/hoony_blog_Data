package Factory;

public abstract class SmartPhoneFactory {
    public abstract Cpu makeCpu();
    public abstract Ram makeRam();
    public abstract Display makeDisplay();
    public String assemble(String deviceName){
        StringBuilder spec = new StringBuilder();
        spec.append(deviceName).append("\n");
        spec.append("cpu: ").append(makeCpu().createCpu()).append("\n");
        spec.append("ram: ").append(makeRam().createRam()).append("\n");
        spec.append("Display: ").append(makeDisplay().createDisplay()).append("\n");
        return spec.toString();
    }
}
