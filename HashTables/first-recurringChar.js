//Google interview question
//Given an array = [2,5,1,2,3,5,1,2,4];
//It should return 2

//Given an array = [2,3,4,5];
// It should return undefined;

const firstReChar = (arr) => {
    // create hashTable
    let hashTable = {};

    //Loop through array
    for (let i = 0; i < arr.length; i++){
        // Check if hashTable[arr[i]] === undefined
        if (hashTable[arr[i]] === undefined){
            hashTable[arr[i]] = 1;
        } else {
            hashTable[arr[i]] ++;
        }
    }

    for (let key in hashTable){
        if (hashTable[key] > 1 ){
            return key;
        }
    }
    return undefined;
} //O(n)

console.log(firstReChar([2,5,1,2,3,5,1,2,4]));