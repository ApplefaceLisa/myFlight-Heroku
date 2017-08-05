/**
 * Created by Yajing Li on 6/25/2017.
 */
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
let cors = require("cors");
/*
let path = require("path"),
    async = require('async');
    fs = require('fs');
*/
let carriers = require('./db/Carriers');
let routes = require('./db/Routes');
let flightDetails = require('./db/Flights');
let PORT = process.env.PORT || 3000;

let app = express();
app.use(jsonParser);
app.use(cors());

/**
 * Making it to serve the files from the public directory..
 */
app.use(express.static(__dirname + '/public'));

//mongoose.connect("mongodb://localhost/myFlightsDB");
mongoose.connect("mongodb://flight:flight@ds111851.mlab.com:11851/myflights_db");

app.get('/flights/carriers', function(req, res, next) {
    carriers.find(function(err, data) {
        if (err) {
            res.json(err).status(500);
        } else {
            res.send(data);
        }
    });
});

app.get('/flights/carriers/:carrierName', function(req, res, next) {
    let carrier = req.params.carrierName;
    routes.find({"carrier" : carrier}, function(err, data) {
        if (err) {
            res.json(err).status(500);
        } else {
            res.send(data);
        }
    })
});

app.get('/flights/carriers/:carrierName/:flightName', function(req, res, next) {
    let carrier_name = req.params.carrierName;
    let flight_name = req.params.flightName;
    flightDetails.find({"carrier" : carrier_name, "route":flight_name}, function(err, data) {
            if (err) {
                res.json(err).status(500);
            } else {
                res.send(data);
            }
        });
});

app.listen(PORT, function() {
    console.log("Server is running...")
});