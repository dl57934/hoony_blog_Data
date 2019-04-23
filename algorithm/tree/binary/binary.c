#include <stdio.h>
#include <stdlib.h>

typedef struct _Node{
	struct _Node *left;
	struct _Node *right;
	int value;
}Node;

Node* makingNode(int value){
	Node *node = (Node*) malloc(sizeof(Node));
	node->left=Null;
	node->right=Null;
	node->parent=Null;
	node->value = value;
	return node;
}

void appendNode(Node *parent, Node *child){
	if(parent->left == NULL)
		parent->left = child;
	else{
		Node *curr = parent->left;
		while(curr->right != NULL){
			curr = curr->right;
		}
		
	}
}

int main(){
	Node* root = makingNode(5);
}