const express = require("express");
const mongoose = require("mongoose");
const app = express();

//^ Code which allows to access .env file in app.js file 
require('dotenv/config');

//^ importing post file of routes folder to app.js

const post=require('./routes/post');

//^ Using Middleware for route-"posts"
app.use('/',post);


//% Note:
//^     If routes is'nt imported below code gets executed, 
//^     If routes files is imported(as done above) and also contains the same route(i.e. "/posts"),
//^       then the priority goes to the router files. 

// app.get("/posts", (req, res) => {
//   res.send("Hello I from main app");
// });

















//^ Connecting to MongoDB database using "MongoDB Atlas" 
mongoose
//^ URI is the referrence of the database connection link 
//% URI ref is connect using "process.env"(NodeJS.process) 
  .connect(process.env.URI)
  .then(() => {
    console.log("Hurray!! Connection Successfull.");
  })
  .catch((e) => {
    console.log(new Error(e).message);
  });




//^ This is how you connect express
app.listen(8080, () => {
  console.log("Listening to port 8080");
});
