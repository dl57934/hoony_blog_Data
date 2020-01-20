#include <cstdio>
#include <stdlib.h>
#include <queue>


using namespace std;

typedef struct _Node{
	struct _Node *left;
	struct _Node *right;
	int value;
}Node;

queue <Node*> qu; 

Node* makingNode(int value);
Node* addNode(Node *root, int value);
Node* searchNode(Node* root, int value);
Node* deleteNode(Node* root, int value);
Node* getSuccessor(Node* root);
void levelOrder(Node* node);

int main(){
	Node* rootNode = makingNode(5);
	addNode(rootNode, 8);
	addNode(rootNode, 2);
	addNode(rootNode, 4);
	addNode(rootNode, 7);
	addNode(rootNode, 6);
	addNode(rootNode, 10);
	addNode(rootNode, 15);
	levelOrder(rootNode);
	printf("\n");
	deleteNode(rootNode, 5);
	levelOrder(rootNode);
}

Node* makingNode(int value){
	Node* node = (Node*)malloc(sizeof(Node));
	node->left = NULL;
	node->right = NULL;
	node->value = value;
	return node;
}

Node* addNode(Node *root, int value){
	if(root == NULL)
		return makingNode(value);

	
	if(root->value > value)
		root->left = addNode(root->left, value);
	else 
		root->right = addNode(root->right, value);

	return root;
}

Node* searchNode(Node* root, int value){
	if(root == NULL || root->value == value)
		return root;
	if(root->value > value)
		return searchNode(root->left, value);

	return searchNode(root->right, value);
}

Node* deleteNode(Node* root, int value){
	if(root == NULL)
		return NULL;
	if(root->value > value)
		root->left = deleteNode(root->left, value);
	else if(root->value < value)
		root->right = deleteNode(root->right, value);
	else{
		if(root->left == NULL){
			Node* temp = root->right;
			free(root);
			return temp;
		}
		else if(root->right == NULL){
			Node* temp = root->left;
			free(root);
			return temp;	
		}
		Node* successor = getSuccessor(root->right);

		root->value = successor->value;

		root->right = deleteNode(root->right, successor->value);
	}
	return root;
}

Node* getSuccessor(Node* root){
	Node* currentNode = root;
	while(currentNode->left!=NULL)
		currentNode = currentNode->left;
	return currentNode;
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