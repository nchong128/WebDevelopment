const express = require("express");
const bodyParser = require("body-parser");
const port = 6969;
var request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res) => {
    let cryptoCode = req.body.crypto;
    let fiatCode = req.body.fiat;
    let websiteCode = cryptoCode + fiatCode;
    let baseURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/';

    request(baseURL + websiteCode, function (error, response, body) {
    let data = JSON.parse(body);

    res.write("The current date is " + data.display_timestamp);
    res.write("The price of "+  cryptoCode + " is " + data.last + " " + fiatCode);

    res.send();
    });
});

app.listen(port, function() {
    console.log("Server is running on port " + port);
});