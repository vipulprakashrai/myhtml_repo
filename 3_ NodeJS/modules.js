// const req = require('./people');
// console.log(req);
// A nice way to import multiple different thing from a different file is to use destructuring

const {people, age} = require('./people');


//console.log(people);//ReferenceError: people is not defined
// to acess the people from this file we have to manually export this thing 
console.log(people, age);


const os = require('os');
console.log(os.platform(), os.homedir());