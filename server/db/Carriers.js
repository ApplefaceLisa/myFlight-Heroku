/**
 * Created by Yajing Li on 6/25/2017.
 */
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let carrierSchema = new Schema({
    carrierName : String
}, { collection: 'Carriers' });
let carriers = mongoose.model('carriers', carrierSchema);

module.exports = carriers;