public class QuickSort implements SortStrategy {
    @Override
    public void sort(int[] arr) {
        quicksort(arr);
    }

    public void quicksort(int[] arr){
        quicksort(arr, 0, arr.length-1);
    }

    public void quicksort(int[] arr, int start, int end){
        int part = partition(arr, start, end);
        if(start < part-1)
            quicksort(arr, start, part-1);
        if(part < end)
            quicksort(arr, part, end);

    }

    public int partition(int[] arr, int start, int end){
        int pivot = arr[(start+end)/2];
        while(start <= end){
            while(arr[start] < pivot) start++;
            while(arr[end] > pivot)end--;
            if(start <= end){
                swap(arr, start, end);
                start++;
                end--;
            }
        }
        return start;
    }

    public void swap(int[] arr, int start, int end){
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
}
