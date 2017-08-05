/**
 * Created by Yajing Li on 6/25/2017.
 */
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let routeSchema = new Schema({
    carrier : String,
    routes : [{name: String}]
}, { collection : 'Routes' });
let routes = mongoose.model('routes', routeSchema);

module.exports = routes;