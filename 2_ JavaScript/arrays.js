
// Array is just an indexed collection of elements in javascript

// Array declaration

let arr = []
arr = [1, 2, 3, 4, 'hello', 'hi', 'bye', true, 2.5]
console.log(arr);

// How to access the value from the array

let val = arr[5]
let val2 = arr[6]
console.log(val);
console.log(val2);

// Change element in array

arr[4] = 'change in the element'
console.log(arr);

// Arrays Methods--

// 1. push Method-

// push method add an new element of your choice at last of the array element

arr.push('vipul')
console.log(arr);

// 2. pop method-
 // It remove the element from the last of the array
arr.pop()
console.log(arr);

// 3. Unshift method
// it add new element in the beginning of the array
arr.unshift(120)
console.log(arr)


// 4. shift method
// it remove element from the beginning of the arrays
arr.shift()
console.log(arr)