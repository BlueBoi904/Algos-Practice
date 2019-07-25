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

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        //Code that allows us to append another value onto the linked list
        //Create new node
        const newNode = {
            value: value,
            next: null
        }
        // Point this.tail to the new node
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this;
    }
    prepend(value){
        // set this.head = value
        const newNode = {
            value: value,
            next: null
        }
        // Point newNode to this.head
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);