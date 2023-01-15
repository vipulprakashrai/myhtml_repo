// Some: Condition Check: To get true or false based on a condition 
//it will return true if 1 or more that 1 element satisfies the condition -

const transactions = [1000, 3000, 4000, 2000, 898, 3800,4500];

let depositAmount = transactions.some(function(x){
    // return x > 0; // true
    return x < 0; // false
})
console.log(depositAmount);