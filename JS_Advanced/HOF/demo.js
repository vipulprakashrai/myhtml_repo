
let arr = [1, 2, 3, 4, 5,6]
// multiply with 2 in the arr and return the output.

for(let i = 0; i<arr.length; i++){
     arr[i] = arr[i]*2
   
}
console.log(arr);

// Higher Order Function are the function that operate on another function
// either by taking them as an argument or by returning them.

// In Simple Words
// A Higher Order Function is a function that receive a function as an argument or return the function 
// as output.


// 1- .map()-->
// map itself is a function
// map takes the callback function as an argument
// map will call the callback function as many times as the elements in the array
// map will process every value and will apply the instruction that inside a callback function.
// map returns a new array


let ar = [1, 2, 3, 4, 5]
// square the every element in the array using map method.

let squArr = ar.map(function(item){
    return item*item
})
console.log(squArr);

//////////////////////////

 let nameArr = ["Vipul Rai", "Vivek Rai", "Ravi Rai", "Prakhar Rai"]

// use map method and seperate every element according to first name and last name.

 let separetedArr = nameArr.map(function(member){
    let name = member.split(' ')
    return name
 })
 console.log(separetedArr);


///////

let transaction = [1200, 4500, -2300, 1700, -4200]
let InrtoUsd = 74
// convert the transaction from INR TO USD

let convertedTransaction = transaction.map(function(item){
    return item/InrtoUsd;
})
console.log(convertedTransaction);