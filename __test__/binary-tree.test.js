'use strict';

const Node = require('../node/index.js');
const BinaryTree = require('../binary-tree/index.js');

describe('Node creation', () => {

  it('constructor()', () => { 
    let value = 'A';
    let left = 'left';
    let right = 'right';
    let node = new Node(value, left, right);
    expect(node.value).toBe(value);
    expect(node.left).toBe(left);
    expect(node.right).toBe(right);
  });
});

describe('tree creation', () => {

  it('constructor()', () => { 
    let value  = 'A';
    let tree = new BinaryTree(value);
    expect(tree.root).toBe(value);
  });
});

describe('tree traversal', () => {

  it('inOrder() tree traversal', () => { 

    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    
    const tree = new BinaryTree(one);
    
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;

    expect(tree.inOrder()).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5]);
  });
});