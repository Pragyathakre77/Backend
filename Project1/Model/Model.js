let mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    passWord:{
        type:String
    }
})

let User = mongoose.model('User',userSchema)
module.exports = User