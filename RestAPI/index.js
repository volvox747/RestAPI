const express = require("express");
const mongoose = require("mongoose");
const { post } = require("../routes/post");
const app = express();

//^ Code which allows to access .env file in app.js file 
require('dotenv/config');


//^ Using Middleware for route-""

app.use('/',post)


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



app.get("/posts", (req, res) => {
  res.send("Hello I from main app");
});

//^ This is how you connect express
app.listen(8080, () => {
  console.log("Listening to port 8080");
});
