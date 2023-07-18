const express = require("express");

const app = express();

// register view engine->
app.set("view engine", "ejs");
app.set("views", "myviews")

// listen for request
app.listen(3000);

// creating a custom middleware 
app.use((req, res, next)=>{
    console.log("new request made");
    console.log('host: ' , req.hostname);
    console.log('path: ', req.path);
    console.log('method:', req.method);
    next();
});

app.use((req, res, next)=>{
    console.log("In the next middleware");
    next();
});

app.get('/', (req, res)=> {
    const blogs = [
        {title: 'Yadu finds a book', snippet: 'Lorem ipsum dolor sit, amet consectetur'},
        {title: 'shashi goes to trip', snippet: 'Lorem ipsum dolor sit, amet consectetur'},
        {title: 'yashita sleeps a lot', snippet: 'Lorem ipsum dolor sit, amet consectetur'}
    ];
   res.render("index", {title: "Home", blogs});
});

app.get('/about', (req, res)=> {
    res.render("about", {title: "About"});
});

app.get('/blogs/create', (req, res) =>{
     res.render("create", {title: "Create a new blog"});
});
// 404 page

app.use((req, res)=>{
    res.status(404).render("404", {title: "404"});
});