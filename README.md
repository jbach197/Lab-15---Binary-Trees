# Lab 15 - Binary Trees

## Links
Pull Request - https://github.com/jbach197/Lab-15---Binary-Trees/pull/1
Travis - https://travis-ci.com/jbach197/Lab-15---Binary-Trees.svg?branch=master
Heroku is not revelant for this lab.

## Requirements
This lab covers the creation of a binary tree and an in-order traversal function.  A binary tree which is a data structure where each node can have up to 2 children nodes.  As an example:

         1
      2    3
    4  5  6  7

2 and 3 are children to 1.  4 and 5 are children to 2.

The in-order traversal of the tree moces from left nodes to the root and finally to the right nodes.  In the above example, the traversal would be: 4, 2, 5, 1, 6, 3, 7.

The binary tree is created with two cosntructors, a Node constructor and a BinaryTree constructor.  The in-order taversal can ba called with the inOrder() function.

The Big-O for this the traversl is:
* Time: O(n) where n is the number of nodes
* Space: O(h) where h is the height of the tree

## Testing
The following test cases are covered: creation of a node, creation of the binary tree and the traversal function.  To run the tests enter npm test into the command line of the terminal.