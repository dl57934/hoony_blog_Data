#include <cstdio>
#include <stdlib.h>


typedef struct _Node{
	int value;
	struct _Node* left;
	struct _Node* right;
}Node;

Node* makingNode(int value);
Node* insertNode(Node* root, int value);
Node* searchNode(Node* root, int value);
Node* getSuccessor(Node* root);
Node* deleteNode(Node* root, int value);


int main(){
	Node* root = makingNode(5);
}


Node* makingNode(int value){
	Node* newNode = (Node*)malloc(sizeof(Node));
	newNode->left = NULL;
	newNode->right = NULL;
	newNode->value = value;
	return newNode;s
}

Node* insertNode(Node* root, int value){
	if(root==NULL)
		return makingNode(value);

	if(root->value < value)
		root->right = insertNode(root->right, value);
	else 
		root->left = insertNode(root->left, value);

	return root;
}

Node* searchNode(Node* root, int value){
	if(root==NULL || root->value == value)
		return root;
	else {
		if(root->value < value)
			return searchNode(root->right, value);
		else 
			return searchNode(root->left, value);
	}	
}

Node* getSuccessor(Node* root){
	Node* current = root;
	while(current!=NULL)
		current=current->left;
	return current;
}
Node* deleteNode(Node* root, int value){
	if(root==NULL)
		return root;

	if(root->value < value)
		root->right = deleteNode(root->right, value);
	else 
		root->left = deleteNode(root->left, value);
	else{
		if(root->left == NULL){
			Node* temp = Node->right;
			free(root);
			return temp;
		}else if(root->right == NULL){
			Node* temp = Node->left;
			free(root);
			return temp;
		}else{
			Node* sucessor = getSuccessor(root->right);
			root->valeu = successor->value;
			root->right = deleteNode(root->right, successor->value);
		}
	}
	return root;
}



