// 2- .filter()-->  Filter return the new arrays that containing array elements that matches a 
// specific condition if the condition stands the true it will filter out those elements and will 
// present them in a new array.

let array = [2, 4, 5, 6, 8, 9]

let evenArray = array.filter(function(item){
    return item % 2 == 0;
})
console.log(evenArray);


////////////////////////////////
let transaction = [1200, 4500, -2300, 1700, -4200]

let depositTrans = transaction.filter(function(x){
    return x > 0
})
console.log(depositTrans);

///////////////////////////// Problem--
let arr = [
    {name: "A", age : 12, gender : "M"},
    {name: "B", age : 20, gender : "F"},
    {name: "C", age : 22, gender : "M"},
    {nmae: "D", age : 25, gender : "F"}
]
// age of all female --

//  let female = arr.filter(function(item){
//     // if(item['gender'] == 'F'){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     return item['gender'] == 'F'
//  })
//  console.log(female);

//  let ageofFemale = female.map(function(x){
//     return x['age'];
//  })
//  console.log(ageofFemale);
 
 // Second Method
 
 let female = arr.filter(function(item){
    // if(item['gender'] == 'F'){
    //     return true;
    // }else{
    //     return false;
    // }
    return item['gender'] == 'F'
 }).map(function(x){
    return x.age;
 })
 console.log(female);

/////
 const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(function(n) {  
  return n > 5;
});
console.log(filteredArray);

  


