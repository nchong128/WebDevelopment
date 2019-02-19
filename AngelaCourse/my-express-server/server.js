//jshint esversion:6
const express = require('express');
const app = express();
const port = 3000;

// MAIN PAGE
app.get('/', function(request,response) {
    response.send("<h1>Hello World</h1>");
});

// CONTACT PAGE
app.get("/contact", (req, res) => {
    res.send("Contact me at nchong128@gmail.com");
})

// ABOUT PAGE
app.get("/about", (req, res) => {
    res.send("My name is Nicholas");
})

// HOBBIES SECTION
app.get("/hobbies", (req, res) => {
    res.send("I rlly like sleeping.");
})

// Begins listening 
app.listen(port, () => {console.log("Server started on port " + port);});