const express=require('express');
const mongoose=require('mongoose');

const app=express();


app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(8080,()=>{console.log("Listening to port 8080");})