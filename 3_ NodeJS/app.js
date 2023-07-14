const express = require("express");

const app = express();

// register view engine->
app.set("view engine", "ejs");
app.set("views", "myviews")

// listen for request
app.listen(3000);

app.get('/', (req, res)=> {
    const blogs = [
        {title: 'Yadu finds a book', snippet: 'Lorem ipsum dolor sit, amet consectetur'},
        {title: 'shashi goes to trip', snippet: 'Lorem ipsum dolor sit, amet consectetur'},
        {title: 'yashita sleeps a lot', snippet: 'Lorem ipsum dolor sit, amet consectetur'}
    ];
   res.render("index", {title: "Home", blogs: "blogs"});
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