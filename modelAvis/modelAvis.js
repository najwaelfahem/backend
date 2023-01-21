const mongoose = require('mongoose');
let avisSchema = mongoose. Schema({
createdAt:String,
rate:Number,
comment:String,
createdBy:String
})
const Avis= mongoose.model('avis',avisSchema)
module.exports=Avis









 