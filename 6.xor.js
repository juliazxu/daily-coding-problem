// This problem was asked by Google.

// An XOR linked list is a more memory efficient doubly linked list. 
// Instead of each node holding next and prev fields, it holds a field named both, 
// which is a XOR of the next node and the previous node. 
// Implement a XOR linked list; it has an add(element) which adds the element to the end, 
// and a get(index) which returns the node at index.

class XORNode {
  constructor(prevNode, nextNode) {
    this.both = prevNode.both ^ nextNode.both;
    this.index = null;
  }
}

class XOR {
  constructor(node) {
    this.head = node;
  }

  add(element) {

  }

  get(index) {

  }
}