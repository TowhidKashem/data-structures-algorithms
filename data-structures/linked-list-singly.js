class Node {
  constructor(value, node = null) {
    this.value = value;
    this.next = node;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    // Keeping track of the tail allows append() and prepend() to be O(1)
    this.tail = this.head;
    // Manually keeping track of length also allows getting it to be O(1)
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const oldHead = this.head;
    this.head = new Node(value, oldHead);
    this.length++;
  }

  getNode(index) {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      if (count === index) {
        return node;
      }
      node = node.next;
    }
  }

  insert(value, index) {
    // If index is that of tail or larger than the total number of
    // nodes in the list, just append the new node to the end
    if (index >= this.length - 1) {
      return this.append(value);
    }
    const leader = this.getNode(index);
    leader.next = new Node(value, leader.next);
    this.length++;
  }

  delete(index) {
    const leader = this.getNode(index);
    leader.next = leader.next.next;
    // If the last node is being deleted update the tail
    if (index === this.length - 1) {
      this.tail = leader;
    }
    this.length--;
  }
}

const myLL = new LinkedList(2); // 2

myLL.append(3); // 2 ---> 3
myLL.append(4); // 2 ---> 3 ---> 4

myLL.prepend(1); // 1 ---> 2 ---> 3 ---> 4

myLL.insert(2.5, 2); // 1 ---> 2 ---> 2.5 ---> 3 ---> 4
myLL.insert("last", 1000); // 1 ---> 2 ---> 2.5 ---> 3 ---> 4 ---> last

myLL.delete(2); // 1 ---> 2 ---> 3 ---> 4 ---> last
myLL.delete(4); // 1 ---> 2 ---> 3 ---> 4

console.debug(myLL);
