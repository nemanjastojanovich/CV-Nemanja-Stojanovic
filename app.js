const express = require("express");
const https = require('node:https');
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
extended: true
}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});

app.get("/kontakt.html", function(req, res) {
    res.sendFile(__dirname + "/kontakt.html");
    });

app.listen(process.env.PORT || 3000, function() {
console.log("Server is running on port 3000.");
});