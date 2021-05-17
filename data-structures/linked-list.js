const linkedList = {
  head: {
    value: "TK",
    next: {
      value: "Julia",
      next: {
        value: "Penny",
        next: {
          value: "Leo",
          next: null,
        },
      },
    },
  },
  size() {
    let count = 0;
    let node = linkedList.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  },
  clear() {
    linkedList.head = null;
  },
  getFirstNode() {
    return linkedList.head;
  },
  getLastNode() {
    let lastNode = linkedList.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  },
};

// console.log(linkedList.getFirstNode());

const traverseLinkedList = (node) => {
  console.log(node.value);
  if (node.next) {
    traverseLinkedList(node.next);
  }
};

// traverseLinkedList(linkedList.head);
