#include <cstdio>
#include <stdlib.h>

typedef struct _Node{
	struct _Node * left;
	struct _Node *right;
	int value;
}Node ;

Node* makingNode(int value);
Node* appendNode(Node* root, int value);
Node* deleteNode(Node* root, int value);
Node* getSuccessor(Node* root);
Node* search(Node* root, int value);

int main(){

}


Node* makingNode(int value){
	Node* newNode = (Node*)malloc(sizeof(Node));
	newNode->left = newNode->right = NULL;
	newNode->value = value;
	return newNode;
}

Node* appendNode(Node* root, int value){
	if(root==NULL)
		return makingNode(value);
	if(root->value < value)
		root->right = appendNode(root->right, value);
	else
		root->left = appendNode(root->left, value);		
	return root;
}

Node* deleteNode(Node* root, int value){
	if(root == NULL)
		return root;
	if(root->value > value)
		root->left = deleteNode(root->left, value);
	else if(root->value < value)
		root->right = deleteNode(root->right, value);
	else {
		if(root->left == NULL){
			Node* temp = root->right;
			free(root);
			return temp;
		}
		if(root->right == NULL){
			Node* temp = root->left;
			free(root);
			return temp;	
		}

		Node* temp = getSuccessor(root->right);
		root->value = temp->value;
		root->right = deleteNode(root->right, temp->value);
	}
	return root;
}

Node* getSuccessor(Node* root){
	Node* current = root;
	while(current->left!=NULL)
		current=current->left;
	return current;
}

Node* search(Node* root, int value){
	if(root == NULL || root->value == value)
		return root;
	if(root->value < value)
		search(root->right, value);
	else 	
		search(root->left, value);
}

