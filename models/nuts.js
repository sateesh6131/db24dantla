const mongoose = require("mongoose")
const nutsSchema = mongoose.Schema({

nuts_type:{
    type: String,
    minLength: 3,
    maxLength: 100
},

Weight : {
    type:Number,
},

Cost: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("nuts",nutsSchema)