const fs = require('fs');

const readStream = fs.createReadStream('./doc/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./doc/blog4.txt');

// readStream.on('data', (chunk) => {
//   console.log("--New Chunk--");
//   console.log(chunk); // here to covert it in readable form we can use .toString()

//   writeStream.write('\nNew chunk\n')
//   writeStream.write(chunk);
// });

// piping-->

readStream.pipe(writeStream);