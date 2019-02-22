const express = require("express");
const bodyParser = require("body-parser");
const port = 6969;
let request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res) => {
    let cryptoCode = req.body.crypto;
    let fiatCode = req.body.fiat;
    let amount = req.body.amount;

    let options = {
        url: 'https://apiv2.bitcoinaverage.com/convert/global',
        method: "GET",
        qs: {
            from: cryptoCode,
            to: fiatCode,
            amount: amount
        }
    };

    request(options, (error, response, body) => {
        let data = JSON.parse(body);
        let price = data.price;
        let currentDate = data.time;

        res.write("The current date is " + currentDate);
        res.write("The price of "+  cryptoCode + " is " + price + " " + fiatCode);

        res.send();
    });
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});