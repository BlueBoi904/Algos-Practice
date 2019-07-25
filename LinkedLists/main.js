// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code that allows us to append another value onto the linked list
    //Create new node
    const newNode = new Node(value);
    // Point this.tail to the new node
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    // set this.head = value
    const newNode = new Node(value);
    // Point newNode to this.head
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index === 0) {
       return this.prepend(value);
    }

    if (index >= this.length){
        return this.append(value);
    }
    // Insert at this location, this value
    const newNode = new Node(value);
    
    //value points to the value at index, previous value.next points to value
    let prevNode = null;
    let currentNode = this.head;
    let i = 0;
    while (currentNode !== null) {
      if (i === index) {
        newNode.next = currentNode;
        prevNode.next = newNode;
        this.length++;
        return this;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }
    return this;
  }

  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
    return arr;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,99);
myLinkedList.insert(20,88);
myLinkedList.printList();
