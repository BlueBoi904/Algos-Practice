// Given two arrays, return true if they have any common items

//Brute force
const twoArrMatch = (arr1,arr2) => {
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j ++){
            if (arr1[1] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}
// O(a*b)
// O(1) - Space complexity


// First attempt
const twoArr = (array1,array2) => {
    // Create hashMap
    let hashMap = {};
    // Loop through the first array and put each element on the hashMap
    for (let i = 0; i < array1.length; i++){
        let value = array1[i]
        if (hashMap[value] === undefined){
            hashMap[value] = true;
        }
    }
    // Loop through the second array and lookup each element to see if it is in the hashMap
    for (let i = 0; i < array2.length; i++){
        let lookUpVal = array2[i];
        if (hashMap[lookUpVal] === true){
            return true;
        }
    }

    return false;
}
//O(a + b)
//O(a) - space complexity

// Cleaner javascript solution

const twoArr2 = (arr1,arr2) => {
    return arr1.some(item => arr2.includes(item));
}



const arr1 = ['a','b','c','x'];
const arr2 = ['z','y','x'];

twoArr(arr1,arr2);