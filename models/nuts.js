const mongoose = require("mongoose")
const nutsSchema = mongoose.Schema({

nuts_type:{
    nuts_type: String,
    Weight: Number,
    Cost: Number
},

weight : {
    type:Number,
},

cost: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("nuts",appleSchema)