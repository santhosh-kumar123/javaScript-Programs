class Stack{
    constructor() {
        this.items = [];
    }
    add(element) {
        return this.items.push(element);
    }
    remove() {
        return this.items.pop();
    }
    peack() {
        // return this.items[this.items.length - 1]
        return this.items[2]
    }
    isEmpty() {
        return this.items.length==0
    }
    size() {
        return this.items.length
    }
    clear() {
        return this.items=[]
    }
}
let stack = new Stack()
stack.add(10)
stack.add(20)
stack.add(30);
stack.add(40);
stack.add(50)
console.log(stack.items);
stack.remove()
stack.remove()
console.log(stack.items);
console.log(stack.peack());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.clear());
console.log(stack.items);