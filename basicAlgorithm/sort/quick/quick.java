public class quick{
	public static void main(String[] args){
		int arr[] = {5, 3, 4, 2, 1};
		quicksort(arr);
		for( int i : arr)
			System.out.println(i);
	}

	private static void quicksort(int arr[]){
		quicksort(arr, 0, arr.length-1);
	}

	private static void quicksort(int arr[], int start, int end){
		int part2 = partition(arr, start, end);

		if(start < part2-1)
			quicksort(arr, start, part2-1);
		if(end > part2)
			quicksort(arr, part2, end);
	}

	private static int partition(int arr[], int start, int end){
		int pivot = arr[(start+end)/2];
		while(start <= end){
			while(pivot > arr[start]) start++;
			while(pivot < arr[end]) end--;
			if(start <= end){
				swap(arr, start, end);
				start++;
				end--;
			}
		}
		return start;
	}

	private static void swap(int arr[], int start, int end){
		int temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
	}
}