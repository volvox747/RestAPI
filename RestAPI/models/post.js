
//^ This file was crwated to create Schemas(prototypes or models) of database 
const mongoose=require('mongoose');

//^ creating Schema 
const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

//^ exporting posts

module.exports=postSchema;

