const strings = ['a','b','c','d'];
//4*4 = 16 bytes of storage

//push
strings.push('e'); //O(1)

//pop
strings.pop(); //O(1)

//unshift
//Add new element to the beginning of the array, shifting all other elements foward
strings.unshift('x'); //O(n)

//splice
strings.splice(2,0,'alien'); //O(n)

console.log(strings)

//Arrays Pros and Cons

/*
Pros:
Fast lookups
Fast push/pop
Ordered

Cons:
Slow inserts
Slow deletes
Fixed size
*/