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
}