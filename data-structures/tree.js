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

  traverseBF(fn) {
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
}
