/*

    [20]          [40]          [-15]

[12] [-2] [1]                    [-2]

*/

// const tree = {
//   nodes: [{
//     data: 20,
//     children: [{
//       data: 0,
//       children: [{
//         data: 12,
//         children: null
//       }, {
//         data: -2,
//         children: null
//       }, {
//         data: 1,
//         children: null
//       }]
//     }, {
//       data: 40
//     }, {
//       data: -15,
//       children: [{
//         data: -2,
//         children: null
//       }]
//     }]
//   }]
// };

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

  /*
    - From left to right
    - Level by level
    - Disregard parent/child relationships, start at the top, simply just go left to right level by level
    - Any tree traversial problem that mentions the word "width" can be solved using breadth first traversal
  */
  breadthFirstTraversal(fn) {
    // Create an array to hold the nodes
    // Default value should be the root node
    const nodes = [this.root];

    while (nodes.length) {
      // Remove the first node from the array
      const node = nodes.shift();

      // If the node has any children push it to the end of the array
      nodes.push(...node.children);

      fn(node);
    }
  }

  // Depth first traversal is the exact same algorithm as breadth first
  // the only difference is instead of pushing the children to the end of the array you add it to the begining
  depthFirstTraversal(fn) {
    const nodes = [this.root];

    while (nodes.length) {
      const node = nodes.shift();

      // If the node has any children add to the start of the array
      nodes.unshift(...node.children);

      fn(node);
    }
  }
}

// Algorithim to get the count of the number of nodes per level on a tree (i.e. width) using breadth first traversal
function getLevelWidth(root) {
  // Create 2 arrays, one to hold nodes and the other to hold counts
  // Initiate the first with the default root node and the identifier at the end, initiate the second with a "0"
  const nodes = [root, "end"]; // "end" is a unique identifier that signifies the end of a row
  const nodesCount = [0];

  // > 1 check ensures we don't continue if the traversal reaches the end
  while (nodes.length > 1) {
    const node = nodes.shift();

    if (node === "end") {
      // If we reached the end add a new count of "0" to the counter array
      // And push the identifier to the end of the nodes array
      nodesCount.push(0);
      nodes.push("end");
    } else {
      nodes.push(...node.children);
      nodesCount[nodesCount.length - 1]++; // Increment the value of the last item in the counter array
    }
  }

  return nodesCount;
}
