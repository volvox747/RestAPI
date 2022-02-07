const express=require('express');
const Post = require('../models/post');
const router=express.Router();


//^ importing post schema from models folder 
const Post=require('../models/post');



//@ Get all posts 

router.get('/posts',async (req,res)=>{
    try
    {
    const posts=await Post.find();
    //^ Returning the results in json format 
    res.json(posts);
    }
    catch(err)
    {
        res.send(res.statusMessage,res.statusCode);
    }
})


//@ Submit a post

router.post('/post',(req,res)=>{
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
        res.send(res.statusMessage, res.statusCode);
    });
})


//@ Get a specific post

router.get('/:postId',async (req,res)=>{
    try{
      //^ Destructuring id from the object req.param
      //^ Find the specific data using the destructured id   
      const { postId } = req.params;
      const post = Post.findById(postId);
      res.json(postId);
    }
    catch(err){
        res.send(res.statusMessage, res.statusCode);
    }
})


module.exports=router;