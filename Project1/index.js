let express = require('express')
let app = express()

let mongoose = require('mongoose')

let bcrypt = require('bcrypt')

let User = require('./Model/Model')

let jwtoken = require('jsonwebtoken')

let cors = require('cors')
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/myData').then(()=>{
    console.log('chl rha hu');
}).catch(()=>{
    console.log('nhi chlunga');
})

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hellooo')
})

app.post('/signup',async(req,res)=>{
   console.log(req.body);
   let userData = req.body
   let {email} = req.body
   let user = await User.findOne({email})
    console.log(user);
   if(user){
     res.send('user jinda h')
   }
   else{
    //   res.send('acc created')
       userData.passWord = await bcrypt.hash(userData.passWord,5)
       console.log(userData.passWord);

       let dbUser = new User({
        name:userData.name,
        email:userData.email,
        passWord:userData.passWord
       }) 

       await dbUser.save()
       res.send('ho gya bhai signup')
   }
//    res.send('heheee')
})

app.post('/login',async(req,res)=>{
    console.log(req.body);
    let userInfo = req.body
    let loginData = await User.findOne({email:userInfo.email})

    if(!loginData)
        {
            res.send('koi nhi mila')
        }
    else
        {
        //    res.send('koi mil gya.... , kon user')
        let validPassword = await bcrypt.compare(userInfo.passWord,loginData.passWord)
        if(!validPassword){
            res.send('invalid password')
        }
        else{
            let data = JSON.stringify(loginData)
            let token = jwtoken.sign(data,"secretKey")
            console.log(token,"tekonnnnnn");
         
            res.send({token,loginData})
        }
        }
})


app.listen(5000,()=>{
    console.log("Serverrrrrrrr");
})