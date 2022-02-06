const express = require("express");
const mongoose = require("mongoose");

require('dotenv/config');

const app = express();


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



app.get("/", (req, res) => {
  res.send("Hello World");
});

//^ This is how you connect express
app.listen(8080, () => {
  console.log("Listening to port 8080");
});
