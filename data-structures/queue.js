// First In First Out
class Queue {
  constructor() {
    this.arr = [];
  }
  add(val) {
    return this.arr.push(val);
  }
  remove() {
    return this.arr.shift();
  }
}

const q = new Queue();
q.add(1); // 1
q.add(2); // 2
q.remove(); // 1
