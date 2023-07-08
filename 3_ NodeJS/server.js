const http = require("http");
const fs = require("fs");

const _ = require("lodash");

const server = http.createServer((req, res) => {

// lodash
const num = _.random(0, 28);
console.log(num);

const greet = _.once(() => {
  console.log("Hello there!");
})
greet();
greet();


         console.log(req.url, req.method);

        //  res.setHeader("content-type", "text/plain");
        res.setHeader("content-type", "text/html");

        let path = './view/';
        switch(req.url){
          case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
          case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            case '/about-me':
              res.statusCode = 301;
              res.setHeader('Location', '/about');
              break;  
          default:
            path += '404.html';
            res.statusCode = 400;
            break;    
        }

        // res.write("<head><link rel='stylesheet' href='#'></head>")
        //  res.write("<h1>hello there</h1>");
        //  res.write("<h2>hello there</h2>");
        //  res.end();

    fs.readFile(path, (err, data) => {
              if(err){
                console.log(err);
                res.end();
              }
              else{
                res.write(data);
                res.end();
              }
    })

});
server.listen(3000, "localhost", () => {
  console.log("listening for request on port number 3000");
});