#include <stdio.h>
#include <stdlib.h>
#include <queue>

using namespace std;

typedef struct _Node
{
	struct _Node *left;
	struct _Node *right;
	int value;
} Node;

Node *makingNode(int value)
{
	Node *node = (Node *)malloc(sizeof(Node));
	node->left = node->right = NULL;
	node->value = value;
	return node;
}
void levelOrder(Node *root);
Node* addNode(Node *root, int value);

queue<Node *> qu;

int main()
{
	Node* root = makingNode(5);
	int data;
	for (int i = 0; i < 5; i++)
	{
		scanf("%d", &data);
		addNode(root, data);
	}
	printf("%d", root->right->value);
}

Node* addNode(Node *root, int value)
{
	if (root == NULL)
		return makingNode(value);
	
	else if (root != NULL)
	{
		if (root->value < value)
			root->right = addNode(root->right, value);
		else if (root->value >= value)
			root->left = addNode(root->left, value);
	}

	return root;
}

void levelOrder(Node *root)
{
	qu.push(root);
	while (!qu.empty())
	{
		Node *node = qu.front();
		printf("%d", node->value);
		qu.pop();
		if (node->left != NULL)
			qu.push(node->left);
		if (node->right != NULL)
			qu.push(node->right);
	}
}
