// console.log('Hello');
 
// let joke = require('give-me-a-joke')
// // console.log(joke,"hehehe");
// joke.getRandomDadJoke((jokeee)=>{
//   console.log(jokeee);
// })

// let chalk = require('chalk')
// console.log(chalk.backgroundColorNames('Hello world'));


// SYNCHRONOUS
// to create and update

// let fs = require('fs')             // (fs=file system) 
// fs.writeFileSync('fsd7.js','hellooo')

//update
// fs.writeFileSync('fsd7.js','hellooo jii')

// read
// let read = fs.readFileSync('fsd7.js')
// console.log(read.toString());

//rename
// fs.renameSync('fsd8.txt','fsd8.js')

//delete
// fs.unlinkSync('fsd8.js')

//ASYNCHRONOUS - when we recieve any problem in synchronous way - use it

//create
// fs.writeFile('index.html','<h2>New file</h2>',(err)=>{
//    if(err) 
//      throw err
//     console.log('file create ho gyi');
// })

//read
// fs.readFile('index.html',(err,data)=>{
//     if(err)
//         throw err
//         console.log(data.toString());
// })


//SERVER

// let http = require('http')
// // console.log(http , 'yad krna nhi h');
// let server = http.createServer((req,res)=>{
//     res.end('hello local host')
// })
// server.listen(6000,()=>{
//     console.log('server running on port no 6000');
// })




//EXPRESS JS

// let express = require('express')
// let app = express()
// console.log(app,'heheh');
// app.use((req,res)=>{
//     res.send("Hello!!,This is server")
// })

// //ROUTING
//Statically

// app.get('/',(req,res)=>{
//     res.send('<h1>Hey....</h1>')
// })
// app.get('/cat/dog',(req,res)=>{
//     res.send('<h1>Meoww....</h1>')
// })
// app.get('/new',(req,res)=>{
//     res.send('<h1>Old!!....</h1>')
// })
// app.get('/new/new2',(req,res)=>{
//     res.send('<h1>Old!!thik h....</h1>')
// })

// app.listen(5000,()=>{
//     console.log("Server running on port no 5000");
// })



//Dynamically
//path parameter

// let express = require('express')
// let app = express()

// app.get('/',(req,res)=>{
//   res.send('Hiii')
// })
// app.get('/:a',(req,res)=>{
//     // console.log(req.params);
//     let {a} = req.params
//     res.send(a)
// })

// app.get('/:r/:a',(req,res)=>{
//     // console.log(req.params);
//     let {r,a} = req.params
//     res.send(`${r} ${a}`)
// })

// app.listen(5000,()=>{
//     console.log('running server');
// })

//query paramater
//google.com/search?fn = x & ln = y & vhfhgvjzdjfk

// app.get('/search',(req,res)=>{
//    console.log("hehe");
//    console.log(req.query);
//    let {fn,lastName} = req.query
//    res.send(`${fn}  ${lastName}`)
// })


// app.set('view engine' , 'ejs')
// app.get('/',(req,res)=>{
//     res.render('index')
// })


//Templating

// let express = require('express')
// let app = express()

// app.get('/',(req,res)=>{
//     res.render('index')
// })
// app.set('view engine' , 'ejs')
// app.use(express.static('Public'))

// app.listen(8000,(req,res)=>{
//     console.log("server running on port no 8000");
// })


// let express = require('express')
// let app = express()
// let arr = ['Helloo','Hiiii','Byeee']

// app.get('/random',(req,res)=>{
//     res.render('Random',{arr})
// })
// app.set('view engine' , 'ejs')

// app.listen(8000,()=>{
//     console.log("server running on port no 8000");
// })


// incomplete
// let express = require('express')
// let app = express()
// let arr = ['Helloo','Hiiii','Byeee','Byeee']

// app.get('/random/:x',(req,res)=>{
//     let {x} = req.params
//     res.render(x)
// })

// app.set('view engine' , 'ejs')
// app.use(express.static('Publilc'))
// app.listen(5000,()=>{
//     console.log("running serverr");
// })


// let express = require('express')
// let app = express()
 
// app.get('/random/:x',(req,res)=>{
//         let {x} = req.params
//         res.render('index')
//      })
//      app.set('view engine' , 'ejs')
// app.listen(5000,()=>{
//     console.log("running serverr");
// })


//get post method
// let express = require('express')
// let app = express()
// app.use(express.urlencoded({extended:true})) //for form data
// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.render('index')
// })

// app.set('view engine','ejs')

// app.get('/user',(req,res)=>{
//     console.log(req.query);

    //destructuring
//    let {name,email,Password }=req.query
//   res.send(`${name}  ${email} ${Password}`)
//    res.send('mil gya')
// })

// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     res.send('formm!!')
// })
// app.listen(5000,()=>{
//     console.log('running');
// })



//CSR VS SSR
let express = require('express')
let app = express()
app.use(express.urlencoded({extended:true}))  //for showing data
let arr =[1,2,3,4,5]

app.use('/home',express.static('Public'))

app.set('view engine' , 'ejs')

app.get('/todo',(req,res)=>{
    // console.log("hehehe");
    if(req.xhr){
        res.json(arr)
    }
    else{
        res.render('Xindex',{arr})
    }
    
})

app.post('/todo',(req,res)=>{
   let {number} = req.body
    
    arr.push(number)
    res.redirect('/todo')
})

app.post('/todo',(req,res)=>{
    console.log(req.body,'jijiji');
    // res.send('hehhee')
    let {data} = req.body
    let data1 = parseInt(data)
    arr.push(data1)
})
app.listen(5000,()=>{
    console.log('server running');
})