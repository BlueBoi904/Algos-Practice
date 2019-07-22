// Create a function that reverses a string:
//'Hi My name is Andrei' should be:
//'ierdnA si eman vM iH'

const reverse = (str) => {
    let strArr = str.split('');
    let stack = [];
    for (let i = strArr.length - 1; i >= 0; i--){
        stack.push(strArr[i]);
    } 
    
    return stack.join('');
}
// Alternative soltion with O(1) memory
function reversePointers(str){
    if (!str || str === ''){
        return null
    }

    if (str.length === 1){
        return str;
    }

    let leftCount = 0;
    let rightCount = str.length - 1;
    let temp;
    

    while (leftCount < rightCount){
        if(leftCount === rightCount){
            break;
        }

        temp = str[rightCount];
        str[rightCount] = str[leftCount];
        str[leftCount] = temp;

        leftCount++;
        rightCount--;

    }

    return str;
}

myString = 'Hello my name is Ben'

 reverse(myString);

// Two Pointer Method
console.log(reversePointers(myString.split('')).join(''))