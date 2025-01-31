const express=require('express')
const app=express()

app.set("view engine","ejs")
app.use(logger)

// Now we can use the HTTP methods like() to access info from ther server which you will code,
// app.get essentialy means the user wants to GET some info by hitting on the path "/" (root page ) and we design a function to (req,res)=>{} to handle this particular request
app.get('/',(req,res)=>{
    res.render("index")

})

const userRouter=require('./routes/users')
app.use('/users',userRouter)

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)