const express=require('express');
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


//@ Create a post

router.post('/post',(req,res)=>{
    //^ Inserting a data to the database
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });

    post.save().
    then((result) => {
        res.json(result);
    }).
    catch((err) => {
        res.send(res.statusMessage, res.statusCode);
    });
})


//@ Read a specific post

router.get('/:postId',async (req,res)=>{
    try{
      //^ Destructuring id from the object req.param
      //^ Find the specific data using the destructured id   
      const { postId } = req.params;
      const post = await Post.findById(postId);
      res.json(post);
    }
    catch(err){
        res.send(res.statusMessage, res.statusCode);
    }
})


//@ Update a specific post

router.put('/:postId',async (req,res)=>{
    try{
        const {postId} =req.params;
        const updatePost=await Post.findByIdAndUpdate(postId,{title:req.body.title});
        res.json(updatePost);
    }
    catch(err)
    {
        res.send(res.statusMessage,res.statusCode);
    }
})



//@ Delete a specific data from the database

router.delete("/:postId", async (req, res) => {
  try {
    //^ Destructuring id from the object req.param
    //^ Delete the specific data using the destructured id
    const { postId } = req.params;
    const post = await Post.findByIdAndDelete(postId)
    res.json(post);
  } catch (err) {
    res.send(res.statusMessage, res.statusCode);
  }
});


 


module.exports=router;