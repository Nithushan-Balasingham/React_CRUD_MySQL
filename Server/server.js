const express = require('express')
const session = require('express-session');

// const cors = require('cors')
// const {authUser} = require('./middleware/check-auth')
const app = express()

// var corOptions = {
//     origin: 'https://localhost:8081'
// }

//middleware
// app.use(cors(corOptions))
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  }));
app.use(express.json())

app.use(express.urlencoded({extended:true}))

const router = require('./routes/productRouter.js')
app.use('/api/products', router)

const userrouter = require('./routes/userRouter.js')
app.use('/api/users',userrouter)


// app.use('/uploads',express.static('./uploads'))


//testing api

// app.get('/',(req,res)=>{
//     res.json({message:'hello guys'})
// })

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Connected with PORT ${PORT}`)
})