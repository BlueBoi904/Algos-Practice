// Stacks

/*
lookup - O(n)

pop - O(1)

push - O(1)

peek - O(1)

Last In Frist Out - LIFO

Good when you need to know the very last value placed onto the stack

*/

// Queues

/*
Opposite of stack

lookup - O(n)

enqueue - O(1)

dequeue - O(1)

peek - O(1)

Firts In Frist Out - FIFO

First come first serve

*/

// Implementing Stacks with linked lists vs arrays

// Arrays use cache locality, vs a linked list which has them scatered all over memory

// Implementing Queues with linked lists is more practical as it can be done in O(1) memory rather than O(n)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.top) {
      console.log(this.top.value);
    } else {
      console.log("Stack is empty");
    }
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }
  pop() {
    let val = this.top.value;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return val;
  }

  isEmpty() {
    return this.bottom ? false : true;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log("Popped: ", myStack.pop());
myStack.peek();
myStack.push(45);
myStack.peek();
console.log(myStack.isEmpty());
