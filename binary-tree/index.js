'use-strict';

export default class BinaryTree{
  constructor(root = null){
    this.root = root;
  }


  //In-order (left - root - right) traversal
  //Time - O(n) where n is the number of nodes
  //space - O(h) where n is the height of tree

  inOrder() {
    let results = [];
    let _walk = (node) => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);

    return results;
  }

  //pre-order (root- left - right) traversal
  //Time - O(n) where n is the number of nodes
  //space - O(h) where n is the height of tree
  preOrder(){
    let result = [];

    let _walk = (node) => {
      result.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return result;
  }

  //post-order (left- right - root) traversal
  //Time - O(n) where n is the number of nodes
  //space - O(h) where n is the height of tree
  postOrder(){
    let result = [];

    let _walk = (node) => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      result.push(node.value);
    }
    _walk(this.root);
    return result;
  }
}

module.exports = BinaryTree;