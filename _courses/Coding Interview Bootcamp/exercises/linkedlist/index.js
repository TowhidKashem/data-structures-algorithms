// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let node = this.head;
    let numNodes = 0;
    while (node) {
      numNodes++;
      node = node.next;
    }
    return numNodes;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (node.next) {
        node = node.next;
      } else {
        return node;
      }
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;

    this.head = this.head.next;
  }

  removeLast() {
    // No nodes
    if (!this.head) return null;

    // 1 node
    if (!this.head.next) {
      this.head = null;
      return this.head;
    }

    let prevNode = this.head;
    let node = this.head.next;

    while (node) {
      if (node.next) {
        prevNode = node;
        node = node.next;
      } else {
        // Last iteration
        prevNode.next = null;
        return null;
      }
    }
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    // if (!this.head) return null; // no longer needed after returning null at the bottom

    // if (index > this.size()) return null; // would be inefficient to loop twice, better to loop once regardless and return null at the bottom

    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return null;

    const prevNode = this.getAt(index - 1); // returns null if nothing found
    const nextNode = this.getAt(index + 1); // returns null if nothing found

    if (prevNode) {
      prevNode.next = nextNode;
    } else {
      this.head = nextNode;
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
    } else if (index === 0) {
      this.head = new Node(data, this.head);
    } else {
      const prevNode = this.getAt(index - 1) || this.getLast();
      prevNode.next = new Node(data, prevNode.next);
    }
  }
}

module.exports = { Node, LinkedList };
