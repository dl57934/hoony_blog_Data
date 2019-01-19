public class MergeSort implements SortStrategy {
    @Override
    public void sort(int[] arr) {
        mergesort(arr);
    }

    public void mergesort(int[] arr){
        mergesort(arr, 0, arr.length-1);
    }
    public void mergesort(int[] arr, int start, int end){
        if(start < end){
            int mid = (start+end)/2;
            mergesort(arr, start, mid);
            mergesort(arr, mid+1, end);
            merge(arr, start, mid, end);
        }
    }
    public void merge(int[] arr, int start, int mid, int end){
        int []temp = new int[end+1];
        int part1 = start;
        int part2 = mid+1;
        int index = start;

        for (int i = start; i <= end; i++)
            temp[i] = arr[i];

        while(part1 <= mid && part2 <= end){
            if(temp[part1] < temp[part2]){
                arr[index] = temp[part1];
                part1++;
            }else{
                arr[index] = temp[part2];
                part2++;
            }
            index++;
        }
        for(int i =0; i <=mid-part1; i++)
            arr[index+i] = temp[part1+i];
    }
}
