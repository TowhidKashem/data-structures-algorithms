// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    // Create an array to hold the nodes
    // Default value should be the root node
    const nodes = [this.root];

    while (nodes.length) {
      // Remove the first node from the array
      const node = nodes.shift();

      // If the node has any children push it into the array
      nodes.push(...node.children);

      fn(node);
    }
  }

  // Depth first traversal is the exact same algorithm as breadth first
  // the only difference is instead of pushing the children to the end of the array
  // you add it to the begining
  traverseDF(fn) {
    const nodes = [this.root];

    while (nodes.length) {
      const node = nodes.shift();

      // If the node has any children add to the start of the array
      nodes.unshift(...node.children);

      fn(node);
    }
  }

  levelWidth(root) {
    const nodes = [root, "end"];
    const nodesCount = [0];

    while (nodes.length > 1) {
      const node = nodes.shift();

      if (node === "end") {
        nodesCount.push(0);
        nodes.push("end");
      } else {
        nodes.push(...node.children);
        nodesCount[nodesCount.length - 1]++;
      }
    }

    return nodesCount;
  }
}

module.exports = { Tree, Node };
