public class SortMachine {
    private SortStrategy sortStrategy;
    private StringBuilder stringBuilder;
    public SortMachine(SortStrategy sortStrategy){
        this.sortStrategy = sortStrategy;
        this.stringBuilder = new StringBuilder();
    }
    public void sort(int arr[]){
        sortStrategy.sort(arr);
        save(arr);
    }

    public void setSortStrategy(SortStrategy sortStrategy){
        this.sortStrategy = sortStrategy;
    }

    private void save(int[] arr){
        for (int i1 : arr) stringBuilder.append(i1).append(" ");
    }

    public String toResult(){
        return stringBuilder.toString();
    }
}
