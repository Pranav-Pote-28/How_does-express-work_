const express=require('express')
const router=express.Router()



router.get("/",(req,res)=>{
    res.send("Users page")
})

router.get("/new",(req,res,)=>{
    res.send("Users Form Page")
})

router.get("/:id",(req,res)=>{
    const userId=req.params.id
    res.send(`The User info for the user with id:${userId}`)
})

module.exports=router
