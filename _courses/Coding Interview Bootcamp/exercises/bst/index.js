// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // If val is smaller and there is a child node on the left keep digging deeper
    if (data < this.data && this.left) {
      this.left.insert(data);
    }
    // If no left child just add one
    else if (data < this.data) {
      this.left = new Node(data);
    }
    // If val is larger and there is a child node on the right keep digging deeper
    else if (data > this.data && this.right) {
      this.right.insert(data);
    }
    // If no right child just add one
    else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    // If there's a match we return the node
    if (this.data === data) {
      return this;
    }

    // Keep digging left
    if (data < this.data && this.left) {
      return this.left.contains(data);
    }
    // Keep digging right
    else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    // If node doesn't exist previous checks will be missed and we return null
    return null;
  }

  //   insert(data) {
  //     if (data < this.data) {
  //       if (this.left) {
  //         drillLeft(this.left);
  //       } else {
  //         this.left = new Node(data);
  //       }
  //     } else {
  //       if (this.right) {
  //         drillRight(this.right);
  //       } else {
  //         this.right = new Node(data);
  //       }
  //     }

  //     function drillLeft(node) {
  //       if (data < node.data && !node.left) {
  //         node.left = new Node(data);
  //       } else {
  //         drillLeft(node.left);
  //       }
  //     }

  //     function drillRight(node) {
  //       if (data > node.data && !node.right) {
  //         node.right = new Node(data);
  //       } else {
  //         drillRight(node.right);
  //       }
  //     }
  //   }
}

module.exports = Node;
