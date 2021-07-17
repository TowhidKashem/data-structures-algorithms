// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }
  add(val) {
    this.first.push(val);
  }
  remove() {
    // Reverse first
    while (this.first.peek()) {
      this.second.add(this.first.pop());
    }

    const record = this.second.pop();

    // Un-reverse first
    while (this.second.peek()) {
      this.first.add(this.second.pop());
    }

    return record;
  }
  peek() {
    // Reverse first
    while (this.first.peek()) {
      this.second.add(this.first.pop());
    }

    const record = this.second.peek();

    // Un-reverse first
    while (this.second.peek()) {
      this.first.add(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
