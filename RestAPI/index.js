const express = require("express");
const mongoose = require("mongoose");

const app = express();


//^ Connecting to MongoDB database using "MongoDB Atlas" 
mongoose
  .connect(
    "mongodb+srv://volvox747:Bensoncr7@rest.rp0gv.mongodb.net/restapi?retryWrites=true&w=majority"
  )
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
