// Hash function => function that generates a value of fixed length for each input it recieves


/*
Hash Tables:
insert: O(1)
lookup: O(1)
delete: O(1)
search: O(1)
*/

let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function() {
        console.log('ahhhhhhhh!')
    }
}

user.age // 0(1)
user.spell = 'abra kadabra'; // O(1)
console.log(user);

const a = new Map() // Allows you to save any data type as the key and maintains insertion order