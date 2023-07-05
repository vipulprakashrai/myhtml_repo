const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
         console.log(req.url, req.method);

        //  res.setHeader("content-type", "text/plain");
        res.setHeader("content-type", "text/html");

        // res.write("<head><link rel='stylesheet' href='#'></head>")
        //  res.write("<h1>hello there</h1>");
        //  res.write("<h2>hello there</h2>");
        //  res.end();

    fs.readFile('./view/index.html')

});
server.listen(3000, "localhost", () => {
  console.log("listening for request on port number 3000");
});