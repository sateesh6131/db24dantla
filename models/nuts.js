const mongoose = require("mongoose")
const nutsSchema = mongoose.Schema({


    nuts_type: String,
    Weight: Number,
    Cost: Number


})
module.exports = mongoose.model("nuts",nutsSchema)