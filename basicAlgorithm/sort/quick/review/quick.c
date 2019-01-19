#include <stdio.h>

void quickSort(int arr[], int start, int end);
int partition(int arr[], int start, int end);
void swap(int arr[], int start, int end);

int main(){
	int arr[5] = {4, 2, 1, 5, 3};
	quickSort(arr, 0, 4);
	for(int i = 0; i < 5; i++)
		printf("%d\n", arr[i]);
}

void quickSort(int arr[], int start, int end){
	int part = partition(arr, start, end);
	if(start < part-1)
		quickSort(arr, start, part-1);
	if(part < end)	
		quickSort(arr, part, end);
}
int partition(int arr[], int start, int end){
	int pivot = arr[(start+end)/2];

	while(start <= end){
		while(arr[start] < pivot) start ++;
		while(arr[end] > pivot) end--;
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