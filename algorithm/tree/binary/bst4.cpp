#include <cstdio>
#include <stdlib.h>
#include <queue>

typedef struct _Node{
	int value;
	struct _Node *left;
	struct _Node *right;
}Node;

Node * makingNode(int value);
Node * insertNode(Node* node, int value);
Node * searchNode(Node* node, int value);
Node * deleteNode(Node* node, int value);
Node * getSuccessor(Node* node);
void levelOrder(Node* node);

using namespace std;

queue <Node*>qu;

int main(){
	Node* rootNode = makingNode(6);
	insertNode(rootNode, 8);
	insertNode(rootNode, 2);
	insertNode(rootNode, 4);
	insertNode(rootNode, 7);
	insertNode(rootNode, 10);
	insertNode(rootNode, 15);
	levelOrder(rootNode);
	printf("\n");
	deleteNode(rootNode, 6);
	levelOrder(rootNode);

}

Node * makingNode(int value){
	Node * newNode = (Node*)malloc(sizeof(Node));
	newNode->left = NULL;
	newNode->right = NULL;
	newNode->value = value;
	return newNode;
}

Node * insertNode(Node* node, int value){
	if(node == NULL)
		return makingNode(value);

	if(node->value < value)
		node->right = insertNode(node->right, value);
	else 
		node->left = insertNode(node->left, value);

	return node;
}	

Node * searchNode(Node* node, int value){
	if(node == NULL || node->value == value)
		return node;
	if(node->value < value)
		return searchNode(node->right, value);
	return searchNode(node->left, value);
}

Node * getSuccessor(Node* node){
	Node* current = node;
	while(current->left!=NULL && current)
		current=current->left;
	return current;
}

Node * deleteNode(Node* node, int value){
	if(node == NULL)
		return NULL;
	if(node->value < value)
		node->right = deleteNode(node->right, value);
	else if(node->value > value)
		node->left = deleteNode(node->left, value);
	else{
		if(node->left == NULL){
			Node* temp = node->right; 
			free(node);
			return temp;	
		}else if(node->right == NULL){
			Node* temp = node->left;
			free(node);
			return temp;
		}
		
		Node* successor = getSuccessor(node->right);
		// printf("여기까지왔어 node ->value %d successor-> value%d", node->value , successor->value);
		node->value = successor->value;
		node->right = deleteNode(node->right, successor->value);
	}
	return node;
}

void levelOrder(Node* node){
	qu.push(node);

	while(!qu.empty()){
		Node *node = qu.front();
		printf("%d ", node->value);
		qu.pop();
		if(node->left != NULL)
			qu.push(node->left);
		if(node->right != NULL)
			qu.push(node->right);
	}
}