const mongoose = require("mongoose")
const Services = mongoose.Schema({
    cardIcon:String,
    cardTitle:String,
    cardDesc:String,
    linkText:String,
    link:String

})
module.exports= mongoose.model('services',Services)