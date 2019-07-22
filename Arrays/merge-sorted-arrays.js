// Given two arrays that are sorted, can you merge these two arrays into one while remaining sorted
//mergeSortedArrays([0,3,4,31], [4,6,30]);
// Result: [0,3,4,4,6,30,31];

/*
Key points: 
Input Arrays are sorted, return array remains sorted in the correct order

//Initial thoughts
//We could loop through arr1 and insert any arr2 value that is greater than current index, but less than arr[i+1];
// We could also concat arrays, then sort
*/
// Brute force
const mergeSortedArrays = (arr1,arr2) => {
    return  mergedArr = arr1.concat(arr2).sort();  
};

// Brute Force
const mergeSortedArrays2 = (arr1, arr2) => {
    // Clone arr1 onto result var
    let result = [...arr1];
    let pushed = false;

    for ( let i = 0; i < arr2.length; i++){        
        for (let j = 0; j < result.length; j++){
            if (arr2[i] <= result[j]){
                result.splice(j,0,arr2[i]);
                pushed = true;
                break;
            }
        }
        if (!pushed){
            result.push(arr2[i]);
            pushed = true;
        }
    }
    return result;
}

console.log(mergeSortedArrays2([0,3,4,31], [4,6,30]));
