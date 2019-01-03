#include <stdio.h>

void mergesort(int arr[], int temp[], int start, int end);
void merge(int arr[], int temp[], int start, int mid, int end);

int main(){
 int arr[5] = {5, 2, 3, 1, 4};
 int temp[5];
 mergesort(arr, temp, 0, 4);
 for(int i = 0;i<5; i++){
 	printf("%d\n", arr[i]);
 }
}

void mergesort(int arr[], int temp[], int start, int end){
	if(start < end){
		int mid = (start+end)/2;
		mergesort(arr, temp, start, mid);
		mergesort(arr, temp, mid+1, end);
		merge(arr, temp, start, mid, end);
	}
}	
void merge(int arr[], int temp[], int start, int mid, int end){
	for(int i = start; i <= end; i++)
		temp[i] = arr[i];
	int part1 = start;
	int part2 = mid+1;
	int index = start;

	while(part1 <= mid  && end >= part2){
		if(temp[part1] < temp[part2]){
			arr[index] = temp[part1];
			part1++;
		}else{
			arr[index] = temp[part2];
			part2++;
		}
		index++;
	}
	for(int i = 0;i <= mid-part1;i++)
		arr[i+index] = temp[i+part1];

}