function isInArray(array, value) {
    'use strict';
    return array.includes(value);
}

const arr = [1, 2, 3, 4, 5];
console.log(isInArray(arr, 3)); 
console.log(isInArray(arr, 6)); 
