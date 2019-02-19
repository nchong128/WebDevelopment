//jshint esversion:6
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// Load calculator page
app.get("/", (req, res) => {res.sendFile(__dirname + "/index.html")});

// Load BMI calculator page
app.get("/bmiCalculator", (req, res) => {res.sendFile(__dirname + "/bmiCalculator.html")});

// Retrieve data and send back to user
app.post("/", (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;

    res.send("Result of num1 and num2: " + result);
});

app.post("/bmiCalculator", (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let bmi = (weight / Math.pow(height,2))*10000;

    res.send("Your BMI is " + bmi);
})

app.listen(port, () => {console.log('Server started on port ' + port)});
