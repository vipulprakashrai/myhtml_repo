const fs = require('fs');
// reading files

fs.readFile('./doc/blog1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log("Hi, there ");