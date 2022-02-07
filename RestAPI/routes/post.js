const express=require('express');

const router=express.Router();

router.get('/posts',(req,res)=>{res.send("Hello I am from routes folder");})

module.exports=router;