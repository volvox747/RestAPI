const express=require('express');
const Post = require('../models/post');
const router=express.Router();


//^ importing post schema from models folder 
const Post=require('../models/post');



//@ Get all posts 
// router.get('/posts',async (req,res)=>{
//     const posts=await Post.find();

// })


//@ Submit a post

router.post('/posts',(req,res)=>{
    //^ Inserting a data to the database
    const Post=new Post({
        title:req.body.title,
        description:req.body.description
    });

    Post.save().
    then((result) => {
        res.json(result);
    }).
    catch((err) => {
        res.statusCode
    });
})


module.exports=router;