// Every: Conditon Check: To get true or false based on a condition 
//it will return true if every element satisfies the condition -

const transactions = [1000, 3000, 4000, -2000, 898, 3800,4500];

let depositAmount = transactions.every(function(x){
    return x > 0;
})
console.log(depositAmount);