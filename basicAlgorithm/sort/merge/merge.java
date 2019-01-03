public class merge{
	public static void main(String[] args){
		int []arr= {5, 3, 2, 1, 4};
		mergesort(arr);
		for(int i : arr){
			System.out.println(i);
		}
	}


	private static void mergesort(int[] arr){
		int[] temp = new int[arr.length];
		mergesort(arr, temp, 0, arr.length-1);
	}

	private static void mergesort(int[] arr, int[] temp, int start, int end){
		if(start < end){
			int mid = (start+end)/2;
			mergesort(arr, temp, start, mid);
			mergesort(arr, temp, mid+1, end);
			merge(arr, temp, start, mid, end);
		}
	}

	private static void merge(int[] arr, int[] temp, int start, int mid, int end ){
		for(int i = start; i<=end;i++)
			temp[i] = arr[i] ;
		int part1 = start;
		int index = start;
		int part2 = mid+1;
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

		for(int i = 0; i <= mid-part1; i++)
			arr[i+index] = temp[i+part1]; 
	}
}