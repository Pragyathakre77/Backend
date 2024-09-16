let mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    number:{
        type:Number
    }
})

let User = mongoose.model('User',userSchema)
module.exports = User