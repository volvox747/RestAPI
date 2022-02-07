const express=require('express');
const router=express.Router();

//^ Importing and Using 'body-parser.json' as middleware 
const bodyParser=require('body-parser');

//^ importing post schema from models folder 
const Post=require('../models/post');

router.post('/posts',(req,res)=>{
    console.log(req.body);
})

router.get('/posts',(req,res)=>{
    res.send("Holla!! I am on posts");
})

module.exports=router;