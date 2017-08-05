/**
 * Created by Yajing Li on 6/25/2017.
 */
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let detailsSchema = new Schema({
    carrier : String,
    route : String,
    details : [{
        "ident": String,
        "timestamp": String,
        "longitude": String,
        "latitude": String,
        "groundspeed": String,
        "altitude": String,
        "updateType": String,
        "heading": String,
        "arrivalTime": String
    }]
}, { collection: "flightDetails" });
let flightDetails = mongoose.model('flightDetails', detailsSchema);

module.exports = flightDetails;