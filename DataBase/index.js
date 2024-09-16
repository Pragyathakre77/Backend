let express = require('express')
let app = express()
let User = require('./model/Model')

let mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myData').then(()=>{
    console.log("chl gya");
}).catch((err)=>{
    console.log(err,"nhi chla");
})

// let userSchema = mongoose.Schema({ //for create schema
//     name:{
//         type:String,
//         require
//     },
//     lastName:String,
//     number:Number,
//     isBool:Boolean
// })

// let User = mongoose.model('User', userSchema)   //for create collections

let user = new User({name:"sam",lastName:"bahadur",number:1,isBool:true})    
user.save()

app.get('/',(req,res)=>{
    res.send('Hellooo')
})
app.listen(5000,()=>{
    console.log("Server running");
})