// Callback function--> A function that can be passed to another function as an argument so that it
// can be called later is known as a callback function.

 function printFirstName(firstName){
    console.log(firstName);
 }

 function printLastName(lastName){
     console.log(lastName);
 }
 printFirstName("Vipul");

 printLastName("Rai");

//////////////////////
function printFirstName(firstName , cb){
    console.log(firstName);
    cb("Rai");
}

// function printLastName(lastName){
//     console.log(lastName);
// }
// printFirstName("Vipul" , printLastName); 
           // OR
printFirstName("Vipul" , function printLastName(lastName){
    console.log(lastName);
});


function printHello(cb){
    console.log('hello');
    cb();
}

function printBye(){
    console.log('bye');
}

printHello(printBye);
