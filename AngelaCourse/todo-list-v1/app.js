const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const port = 3000;
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

// Using the EJS as the view engine
app.set('view engine', 'ejs');

// Use local resources
app.use(express.static("public"));

// Use body parser
app.use(bodyParser.urlencoded({extended:true}));

// LOAD HOMEPAGE
app.get("/", (req, res) => {
    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});

});

// Deal with new list entry
app.post("/", (req, res) => {
    let item = req.body.newEntry;

    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work")
    }

    items.push(item);
    res.redirect("/");
});

// WORK Route
app.get("/work", (req, res) => {
    res.render("list", {listTitle:"Work List", newListItems: workItems});
});

// app.post("/work", (req, res) => {
//     let item = res.body.newEntry;
//     workItems.push(item);
//     res.redirect("/work");
// });

app.get("/about", (req, res) => {
    res.render("about");
});

// BEGIN LISTENING
app.listen(port, () => {
    console.log(`Server initialised on port ${port}`);
});