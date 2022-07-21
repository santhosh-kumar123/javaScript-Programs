class Queue {
  constructor() {
    this.items = [];
  }
  add(element) {
    return this.items.push(element);
  }
  remove() {
    return this.items.shift();
  }
  peack() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    return (this.items = []);
  }
}
let queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(5);
console.log(queue.items);
queue.remove();
queue.remove();
console.log(queue.items);
console.log(queue.peack());
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.clear());
console.log(queue.items);
