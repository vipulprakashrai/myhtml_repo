const express = require("express");

const app = express();
// listen for request
app.listen(3000);

app.get('/', (req, res)=> {
    //res.send("<p>Namaste Guys!</p>");
    res.sendFile('./view/index.html', {root: __dirname})
});

app.get('/about', (req, res)=> {
    //res.send("<p>About Page!</p>");
    res.sendFile('./view/about.html', {root: __dirname});
});

// redirects

app.get('/about-us', (req, res)=>{
    res.redirect('/about');
});

// 404 page

app.use((req, res)=>{
    res.setStatus().sendFile('./view/404.html', {root: __dirname});
});