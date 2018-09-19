public class sanghoon implements Observer {
    @Override
    public void update(makingChange makingChange) {
        System.out.println("making son"+makingChange.sonofSon);
    }
}
