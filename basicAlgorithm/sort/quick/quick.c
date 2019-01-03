#include <stdio.h>

int partition(int arr[], int start, int end);
void quicksort(int arr[], int start, int end);
void swap(int arr[], int start, int end);

int main(){
	int arr[5] = {4,3,2,1,5};
	quicksort(arr, 0, 4);
	for(int i = 0; i < 5; i++){
		printf("%d\n", arr[i]);
	}
}


void quicksort(int arr[], int start, int end){
	int part = partition(arr, start, end);
	if(start < part-1)
		quicksort(arr, start, part-1);
	if(end > mid)
		quicksort(arr, part, end);
}


int partition(int arr[], int start, int end){
	int pivot = arr[(start+end)/2];
	while(start <= end){
		while(pivot > arr[start])start++;
		while(pivot < arr[end]) end--;
		if(start <= end){
			swap(arr, start, end);
			start++;
			end--;
		}
	}
	return start;
}



void swap(int arr[], int start, int end){
	int temp = arr[start];
	arr[start] = arr[end];
	arr[end] = temp;
}