public class Main {
    public static void main(String[] args){
        int []arr1 = {5, 2,1, 3, 6, 4, 8, 0};
        int []arr2 = {5, 2,1, 3, 6, 4, 8, 0};

        SortMachine quicksortMachine = new SortMachine(new QuickSort());
        SortMachine mergesortMachine = new SortMachine(new MergeSort());

        quicksortMachine.sort(arr1);
        mergesortMachine.sort(arr2);

        System.out.println("quicksortMachine: " + quicksortMachine.toResult());
        System.out.println("mergesortMachine: " + mergesortMachine.toResult());
    }
}
