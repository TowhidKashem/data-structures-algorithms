class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newTop = new Node(value);
    newTop.next = this.top;
    this.top = newTop;
    this.length++;
    return newTop;
  }

  pop() {
    const lastItem = this.top;
    this.top = lastItem.next;
    this.length--;
    return lastItem;
  }

  isEmpty() {
    return !this.top;
  }
}

const myStack = new Stack();

myStack.push(1); // 1
myStack.push(2); // 2 --> 1
myStack.push(3); // 3 --> 2 --> 1
myStack.pop(); // 2 --> 1
