#include <cstdio>
#include <stdlib.h>
typedef struct _Node{
	_Node *left;
	_Node *right;
	int value;
}Node;

Node* makingNode(int value);
Node* addNode(Node* root, int value);
Node* deleteNode(Node* root, int value);
Node* getSuccessor(Node* root);
Node* search(Node* root, int key);

void inorder(Node *root) 
{ 
    if (root != NULL) 
    { 
        inorder(root->left); 
        printf("%d \n", root->value); 
        inorder(root->right); 
    } 
} 

int main(){
	Node * root = makingNode(10);
	addNode(root, 8);
	addNode(root, 1);
	addNode(root, 4);
	inorder(root);
	Node* ear = search(root, 4);
	printf("%d", ear->value);
}

Node* makingNode(int value){
	Node *newNode = (Node*)malloc(sizeof(Node));
	newNode->left = newNode->right = NULL;
	newNode->value = value;
	return newNode;
}

Node* addNode(Node* root, int value){
	if(root == NULL)
		return makingNode(value);

	if(root->value < value)
		root->right = addNode(root->right, value);
	else if(root->value >= value)
		root->left = addNode(root->left, value);

	return root;
}

Node* deleteNode(Node* root, int value){
	if(root == NULL)
		return root;
	if(root->value < value)
		root->right = deleteNode(root->right, value);
	else if(root->value > value)
		root->left = deleteNode(root->left, value);
	else{
		if(root->left == NULL){
			Node* temp = root->right;
			free(root);
			return temp;
		}else if(root->right == NULL){
			Node* temp = root->left;
			free(root);
			return temp;
		}
		Node* successor = getSuccessor(root->right);
		root->value = successor->value;
		root->right = deleteNode(root->right, value);
	}

	return root;
}

Node* getSuccessor(Node* root){
	Node* current = root;
	while(current->left !=NULL)
		current = current->left;
	return current;
}

Node* search(Node* root, int key){
	if(root->value == key){

		return root;
	}
	if(root->value < key)
		return search(root->right ,key);
	
		return search(root->left, key);
}