const fs = require('fs');
// reading files-->

// fs.readFile('./doc/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log("Hi, there ");

// writing files-->

// fs.writeFile('./doc/blog1.txt', 'life means challenge', () => {
//     console.log("file was written");
// });

// fs.writeFile('./doc/blog2.txt', 'life is beautiful', () => {
//     console.log("file was written");
// });


// directories-->

if(!fs.existsSync('./practice')){
    fs.mkdir('./practice', (err) => {
        if(err){
         console.log(err);
        }
        console.log("folder is created");
 });
} else{
    fs.rmdir('./practice', (err) => {
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    })
}


// deleting files-->

if(fs.existsSync('./doc/deletme.txt')){
    fs.unlink('./doc/deletme.txt', (err) => {
           if(err){
            console.log(err);
           }
           console.log("file is deleted");
    })
}