// Write a function to see if a binary tree is 
// "superbalanced" (a new tree property we just made up).

// A tree is "superbalanced" if the difference between the depths of any 
// two leaf nodes is no greater than one.

// Here's a sample binary tree node class:

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// breadth first search
// store first level where a leaf node does not exist
// when max level difference > 1, return false
// if you make it through the entire tree, return true

const checkSuperBalanced = tree => {
  const keepCheckingNodes = (node, nodesEvaling, nodesToEval, level, firstLevelNoLeafNodes) => {
    // console.log('nodesEvaling', nodesEvaling, 'nodesToEval', nodesToEval, 'firstLevelNoLeafNodes', firstLevelNoLeafNodes);

    // base case if we have no more nodes to evaluate
    if (nodesEvaling.length === 0 && nodesToEval.length === 0) {
      return true;
    }
    nodesEvaling = nodesEvaling.slice(1);
    node.left && nodesToEval.push(node.left);
    node.right && nodesToEval.push(node.right);

    // evaluate if this is the first level with no nodes, or if it hit our base case
    if (!node.left || !node.right) {
      if (!firstLevelNoLeafNodes) {
        firstLevelNoLeafNodes = level;
      } else if (level - firstLevelNoLeafNodes > 1) {
        return false;
      }
    }

    // iterate down one depth
    if (nodesEvaling.length === 0) {
      nodesEvaling = nodesToEval;
      nodesToEval = [];
      level++;
    }
    node = nodesEvaling[0];

    return keepCheckingNodes(node, nodesEvaling, nodesToEval, level, firstLevelNoLeafNodes);
  }
  return keepCheckingNodes(tree, [tree], [], 0, null);
}

let tree1 = new BinaryTreeNode(0);
tree1.insertLeft(-1);
tree1.insertRight(1);
checkSuperBalanced(tree1); // true

let tree2 = new BinaryTreeNode(0);
let tree3 = tree2.insertLeft(-5);
let tree4 = tree3.insertRight(5);
let tree5 = tree4.insertRight(6);
checkSuperBalanced(tree2); // false